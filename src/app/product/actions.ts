"use server";
import { revalidateTag } from "next/cache";
import { getReviewFormData } from "./utils";
import { executeGraphql } from "@/api/utils";
import { ReviewCreateDocument } from "@/gql/graphql";

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
