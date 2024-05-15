import { cookies } from "next/headers";
import { executeGraphql } from "./utils";
import {
	ProductGetByIdDocument,
	CartAddItemDocument,
	CartGetByIdDocument,
	CartCreateDocument,
} from "@/gql/graphql";

export async function addProductToCart(
	cartId: string,
	productId: string,
	total: number,
) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			cartId,
			productId,
			total,
		},
		next: { tags: ["cart"] },
	});
}

export async function getOrCreateCart() {
	const existingCard = await getCartFromCookies();
	if (existingCard) {
		return existingCard;
	}
	const { createOrder: newCart } = await createCart();
	if (!newCart) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", newCart.id, {
		httpOnly: true,
		sameSite: "lax",
	});
	return newCart;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	}
}

async function getCartById(id: string) {
	return executeGraphql({
		query: CartGetByIdDocument,
		variables: { id },
		next: { tags: ["cart"] },
	});
}

async function createCart() {
	return executeGraphql({
		query: CartCreateDocument,
		variables: {},
	});
}
