import { redirect } from "next/navigation";
import NextImage from "next/image";
import { formatMoney } from "./utils";
import { ChangeQuantity } from "./ChangeQuantity";
import { getCartFromCookies } from "@/api/cart";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
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
					{cart.orderItems?.map((item) => {
						const images = item?.product?.images;
						const name = item?.product?.name || "";
						if (!item.product) {
							return null;
						}
						const { id: itemId } = item;
						const { price } = item.product;

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
									<ChangeQuantity
										itemId={itemId}
										quantity={quantity}
										total={price}
									/>
								</td>
								<td>{formatMoney(item.total)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
