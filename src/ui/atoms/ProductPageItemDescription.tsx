import { Dropdown } from "./Dropdown";
import { AddToCartButton } from "./AddToCartButton";
import { type VariantFragment, type ProductGetByIdQuery } from "@/gql/graphql";
import { getOrCreateCart, addProductToCart } from "@/api/cart";
import { revalidateTag } from "next/cache";

type ProductPageItemProps = {
	product: Omit<NonNullable<ProductGetByIdQuery["product"]>, "variants"> & {
		variants: VariantFragment[];
	};
};

export const ProductPageItemDescription = ({
	product: { id, name, categories, price, description, variants },
}: ProductPageItemProps) => {
	async function addProductToCartAction() {
		"use server";
		console.log("addProductToCartAction");
		const cart = await getOrCreateCart();
		await addProductToCart(cart.id, id, price);

		console.log("revalidateTag");

		revalidateTag("cart");
	}
	return (
		<form action={addProductToCartAction} className="flex flex-col px-6">
			<h1 className="text-3xl font-bold tracking-tight text-slate-900">
				{name}
			</h1>
			<span>{categories.map(({ name }) => name)}</span>
			<div className="mt-4 flex items-center">
				<div className="font-base small-caps text-lg text-slate-800">
					{price} zł
				</div>
			</div>
			<div className="mt-4 space-y-6">
				<p className="font-sans text-base text-slate-500">{description}</p>
			</div>
			<div className="mt-6 flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					className="h-5 w-5 flex-shrink-0 text-blue-500"
					aria-hidden="true"
				>
					<path d="M18 6 7 17l-5-5"></path>
					<path d="m22 10-7.5 7.5L13 16"></path>
				</svg>
				<p className="ml-1 text-sm font-semibold text-slate-500">In stock</p>
			</div>
			{variants && variants?.length > 0 && (
				<Dropdown
					options={variants.map(({ name, product }) => ({
						name,
						id: product?.id,
					}))}
				/>
			)}
			<div className="mt-auto">
				<AddToCartButton />
			</div>
		</form>
	);
};
