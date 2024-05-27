"use server";

import { executeGraphql } from "@/api/utils";
import {
	CartRemoveProductDocument,
	CartSetProductQuantityDocument,
	type CartSetProductQuantityMutationVariables,
} from "@/gql/graphql";

export const removeItem = (itemId: string) => {
	return executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			itemId,
		},
	});
};

export const changeItemQuantity = async ({
	id,
	quantity,
}: CartSetProductQuantityMutationVariables) => {
	return executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			id,
			quantity,
		},
	});
};
