import { redirect } from "next/navigation";
import NextImage from "next/image";
import { formatMoney } from "./utils";
import { getCartFromCookies } from "@/api/cart";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}
	return (
		<div className="p-10 text-pink-700">
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems?.map((item) => {
						const images = item?.product?.images;
						const name = item?.product?.name || "";
						if (!item.product) {
							return null;
						}
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
								<td>{item.quantity}</td>
								<td>{formatMoney(item.product.price)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
