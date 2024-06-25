import { type CommentType } from "@/api/reviews";
import { type ReviewCreateMutationVariables } from "@/gql/graphql";

export const getReviewFormData = (
	formData: FormData,
): ReviewCreateMutationVariables | null => {
	const { productId, headline, content, rating, name, email } =
		Object.fromEntries(
			Array.from(formData.entries()).map(([key, value]) => [
				key,
				String(value),
			]),
		);
	// TODO: implement form validation
	if (!productId || !headline || !content || !rating || !name || !email) {
		return null;
	}
	return { productId, headline, content, rating: Number(rating), name, email };
};

export const createNewReview = (
	newReview: ReviewCreateMutationVariables,
): CommentType => {
	return {
		id: Math.random().toString(36).substring(10),
		name: newReview.name,
		content: newReview.content,
		rating: newReview.rating,
		picture: null,
		email: newReview.email,
		createdAt: new Date().toISOString(),
		headline: newReview.headline,
	};
};
