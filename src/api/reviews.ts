import { executeGraphql } from "./utils";
import { ReviewsGetByIdDocument } from "@/gql/graphql";

export const getCommentsList = async ({ id }: { id: string }) => {
	const grapglResponse = await executeGraphql({
		query: ReviewsGetByIdDocument,
		variables: { id },
		cache: "no-store",
		next: { tags: ["reviews"] },
	});

	return grapglResponse.reviews || [];
};
