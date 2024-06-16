"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { getCartFromCookies } from "@/api/cart";
import { executeGraphql } from "@/api/utils";
import {
	CartRemoveProductDocument,
	CartSetProductQuantityDocument,
	type CartSetProductQuantityMutationVariables,
} from "@/gql/graphql";

export const removeItem = (itemId: string) => {
	return executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			itemId,
		},
	});
};

export const changeItemQuantity = async ({
	id,
	quantity,
}: CartSetProductQuantityMutationVariables) => {
	return executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			id,
			quantity,
		},
	});
};

export async function handleStripePaymentAction() {
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
		payment_method_types: ["card"],
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
									description: item?.product?.description || ("" as string),
									images: item.product.images.map((i) => i.url),
								},
								unit_amount: item.product.price || 0,
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
