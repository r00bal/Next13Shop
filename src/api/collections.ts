import { executeGraphql } from "./utils";
import {
	CollectionGetBySlugDocument,
	type CollectionGetBySlugQueryVariables,
	CollectionsGetListDocument,
} from "@/gql/graphql";

export const getCollectionsList = async () => {
	const grapglResponse = await executeGraphql(CollectionsGetListDocument, {});
	return grapglResponse.collections;
};
export const getCollectionDescBySlug = async (
	slug: CollectionGetBySlugQueryVariables["slug"],
) => {
	const grapglResponse = await executeGraphql(CollectionGetBySlugDocument, {
		slug,
	});
	return grapglResponse.collections;
};
