"use server";
import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/api/utils";
import { ReviewCreateDocument } from "@/gql/graphql";

export const getReviewFormData = (formData: FormData) => {
	return Object.fromEntries(
		Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
	);
};

export const addCommentAction = async (formData: FormData) => {
	console.dir({ formData }, { depth: null });
	const { productId, headlines, content, rating, name, email } =
		getReviewFormData(formData);
	if (!productId || !headlines || !content || !rating || !name || !email) {
		throw new Error("Missing required fields");
		return;
	}
	await executeGraphql({
		query: ReviewCreateDocument,
		variables: {
			productId: productId,
			headline: headlines,
			content: content,
			rating: Number(rating),
			name: name,
			email: email,
		},
		cache: "no-store",
	});
	revalidateTag("reviews");
};
