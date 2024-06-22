import { executeGraphql } from "./utils";
import {
	type ReviewListItemFragment,
	ReviewsGetByIdDocument,
} from "@/gql/graphql";

export type CommentType = Pick<
	ReviewListItemFragment,
	"id" | "name" | "content" | "rating" | "headline"
> & { picture: NonNullable<ReviewListItemFragment["createdBy"]>["picture"] };

export const mapReviewsResponse = (
	reviews: ReviewListItemFragment[],
): CommentType[] => {
	return reviews.map((review) => ({
		id: review.id,
		name: review.createdBy?.name || "",
		content: review.content,
		rating: review.rating,
		picture: review.createdBy?.picture || "",
		headline: review.headline,
	}));
};

export const getCommentsList = async ({ id }: { id: string }) => {
	const grapglResponse = await executeGraphql({
		query: ReviewsGetByIdDocument,
		variables: { id },
		cache: "no-store",
		next: { tags: ["reviews"] },
	});
	const reviews = mapReviewsResponse(grapglResponse?.reviews);
	return reviews;
};
