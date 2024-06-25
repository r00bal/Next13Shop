import { executeGraphql } from "./utils";
import {
	type ReviewListItemFragment,
	ReviewsGetByIdDocument,
} from "@/gql/graphql";

export type ReviewsType = Pick<
	ReviewListItemFragment,
	"id" | "name" | "content" | "rating" | "headline" | "email" | "createdAt"
> & { picture: NonNullable<ReviewListItemFragment["createdBy"]>["picture"] };

export const mapReviewsResponse = (
	reviews: ReviewListItemFragment[],
): ReviewsType[] => {
	return reviews.map(
		({ id, name, content, email, createdAt, rating, headline, createdBy }) => ({
			id,
			name,
			content,
			email,
			createdAt,
			rating,
			headline,
			picture: createdBy?.picture || "",
		}),
	);
};

export const getReviewsList = async ({ id }: { id: string }) => {
	const grapglResponse = await executeGraphql({
		query: ReviewsGetByIdDocument,
		variables: { id },
		cache: "no-store",
		next: { tags: ["reviews"] },
	});
	const reviews = mapReviewsResponse(grapglResponse?.reviews);
	return reviews;
};
