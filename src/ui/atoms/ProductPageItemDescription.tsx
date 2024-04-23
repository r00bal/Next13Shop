import { cookies } from "next/headers";
import { Dropdown } from "./Dropdown";
import {
	type VariantFragment,
	type ProductGetByIdQuery,
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddItemDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/utils";

type ProductPageItemProps = {
	product: Omit<NonNullable<ProductGetByIdQuery["product"]>, "variants"> & {
		variants: VariantFragment[];
	};
};

async function addProductToCart(cartId: string, productId: string) {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}
	await executeGraphql(CartAddItemDocument, {
		cartId,
		productId,
		total: product.price,
	});
}

async function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await executeGraphql(CartGetByIdDocument, {
			id: cartId,
		});
		if (cart) {
			return cart;
		}
	}
	const { createOrder: newCart } = await executeGraphql(CartCreateDocument, {});
	if (!newCart) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", newCart.id);
	return newCart;
}

export const ProductPageItemDescription = ({
	product: { id, name, categories, price, description, variants },
}: ProductPageItemProps) => {
	async function addProductToCartAction() {
		"use server";
		console.log("addProductToCartAction");
		console.log(`productId: ${id}`);
		const cart = await getOrCreateCart();
		await addProductToCart(cart.id, product.id);
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
				<button
					type="submit"
					className="inline-flex h-14 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6  text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
				>
					Add to cart
				</button>
			</div>
		</form>
	);
};
