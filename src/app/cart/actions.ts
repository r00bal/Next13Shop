"use server";

import { executeGraphql } from "@/api/utils";
import {
	CartSetProductQuantityDocument,
	type CartSetProductQuantityMutationVariables,
} from "@/gql/graphql";

export const changeItemQuantity = async ({
	id,
	quantity,
	total,
}: CartSetProductQuantityMutationVariables) => {
	console.log({ id, quantity, total });

	return executeGraphql(CartSetProductQuantityDocument, {
		id,
		quantity,
		total,
	});
};
