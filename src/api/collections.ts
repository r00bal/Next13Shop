import { executeGraphql } from "./utils";
import {
	CollectionGetBySlugDocument,
	type CollectionGetBySlugQueryVariables,
	CollectionsGetListDocument,
} from "@/gql/graphql";

export const getCollectionsList = async () => {
	const grapglResponse = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: {},
	});
	return grapglResponse.collections;
};
export const getCollectionDescBySlug = async (
	slug: CollectionGetBySlugQueryVariables["slug"],
) => {
	const grapglResponse = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug,
		},
	});
	return grapglResponse.collections;
};
