"use server";

import { executeGraphql } from "@/api/utils";
import {
	CartSetProductQuantityDocument,
	type CartSetProductQuantityMutationVariables,
} from "@/gql/graphql";

export const changeItemQuantity = async ({
	id,
	quantity,
}: CartSetProductQuantityMutationVariables) => {
	console.log("changeItemQuantity", { id, quantity });

	return executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			id,
			quantity,
		},
	});
};
