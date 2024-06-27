"use server";
import { revalidateTag } from "next/cache";
import { changeItemQuantity } from "../cart/actions";
import { getReviewFormData } from "./utils";
import { executeGraphql } from "@/api/utils";
import { ReviewCreateDocument } from "@/gql/graphql";
import { getOrCreateCart, addProductToCart } from "@/api/cart";

export const addReviewsAction = async (formData: FormData) => {
	const newReview = getReviewFormData(formData);
	if (!newReview) {
		return;
	}
	const { productId, headline, content, rating, name, email } = newReview;
	await executeGraphql({
		query: ReviewCreateDocument,
		variables: {
			productId,
			email,
			name,
			content,
			rating,
			picture: "",
			headline,
		},
		cache: "no-store",
	});
	revalidateTag("reviews");
};

export async function addToCartAction(productId: string, price: number) {
	const cart = await getOrCreateCart();
	const { orderItems } = cart;
	const alreadyInCart = orderItems.find(
		(item) => item?.product?.id === productId,
	);
	const { id: orderId, quantity = 0 } = alreadyInCart || {};
	orderId
		? await changeItemQuantity({ id: orderId, quantity: quantity + 1 })
		: await addProductToCart(cart.id, productId, price);
	revalidateTag("cart");
}
