"use server";
import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/api/utils";
import { ReviewCreateDocument } from "@/gql/graphql";
import { type AddCommentActionT } from "@/ui/molecules/CommentsForm";

export const addCommentAction = async (newReview: AddCommentActionT) => {
	const { productId, headline, content, rating, name, email } = newReview;
	console.log("addCommentAction", {
		productId,
		headline,
		content,
		rating,
		name,
		email,
	});

	await executeGraphql({
		query: ReviewCreateDocument,
		variables: {
			productId,
			headline,
			content: content,
			rating: Number(rating),
			name: name,
			email: email,
		},
		cache: "no-store",
	});
	revalidateTag("reviews");
};
