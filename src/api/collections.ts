import { executeGraphql } from "./utils";
import { CollectionsGetListDocument } from "@/gql/graphql";

export const getCollectionsList = async () => {
	const grapglResponse = await executeGraphql(CollectionsGetListDocument, {});
	return grapglResponse.collections;
};
