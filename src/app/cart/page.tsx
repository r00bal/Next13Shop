import { redirect } from "next/navigation";
import NextImage from "next/image";
import Stripe from "stripe";
import { cookies } from "next/headers";
import { formatMoney } from "./utils";
import { ChangeQuantity } from "./ChangeQuantity";
import { RemoveButton } from "./RemoveButton";
import { getCartFromCookies } from "@/api/cart";

export default async function CartPage() {
	const cart = await getCartFromCookies();
	const quantity = cart?.orderItems?.reduce(
		(acc, item) => acc + item.quantity,
		0,
	);
	console.log("CartPage", { quantity, cart });

	if (!cart) {
		redirect("/");
	}
	async function handleStripePaymentAction() {
		"use server";

		if (!process.env.STRIPE_SECRET_KEY) {
			throw new Error("Missing STRIPE_SECRET_KEY env variable");
		}

		const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
			apiVersion: "2024-04-10",
			typescript: true,
		});

		const cart = await getCartFromCookies();
		if (!cart) {
			return;
		}

		const session = await stripe.checkout.sessions.create({
			metadata: {
				cartId: cart.id,
			},
			line_items: cart.orderItems
				.map((item) =>
					item?.product
						? {
								price_data: {
									currency: "usd",
									product_data: {
										name: item.product.name,
										description: item.product.description,
										images: item.product.images.map((i) => i.url),
									},
									unit_amount: item.product.price,
								},
								quantity: item.quantity,
						  }
						: null,
				)
				.filter(Boolean),
			mode: "payment",
			success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `http://localhost:3000/cart/canceled`,
		});
		if (session.url) {
			cookies().set("cartId", "");
			redirect(session.url);
		}
	}

	return (
		<div className="p-10 text-pink-700">
			<h1>Order #{cart.id} summary</h1>
			<table className="w-full">
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart?.orderItems?.map((item) => {
						const images = item?.product?.images;

						if (!item.product) {
							return null;
						}
						const { id: itemId } = item;
						const { name } = item.product;

						const { quantity } = item;

						return (
							<tr key={item.product.id}>
								<td>
									{images &&
										images.map(({ url }) => (
											<NextImage
												key={url}
												src={url}
												alt={name}
												width={50}
												height={50}
											/>
										))}
								</td>
								<td>{name}</td>
								<td>
									<ChangeQuantity itemId={itemId} quantity={quantity} />
								</td>
								<td>{formatMoney(item.total)}</td>
								<td>
									<RemoveButton itemId={item.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<form action={handleStripePaymentAction} className="ml-auto">
				<button
					type="submit"
					className="rounded-sm border bg-slate-100 px-8 py-2 shadow-sm transition-colors hover:bg-slate-200"
				>
					Pay
				</button>
			</form>
		</div>
	);
}
