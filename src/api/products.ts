import { BASE_URL } from "./const";
import {
	type GraphQLResponse,
	type ProductsGraphqlResponse,
	type ProductResponseItem,
} from "@/api/type";
import type { ProductItemType } from "@/ui/molecules/type";

export const getAllProductsNumber = async (): Promise<number> => {
	const res = await fetch(`${BASE_URL}/products`);
	const productsNumber = ((await res.json()) as ProductResponseItem[]).length;
	return productsNumber;
};

export const getProductsList = async (): Promise<ProductItemType[]> => {
	const res = await fetch(
		`https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrdf6g02000008l23scghxpk/master`,
		{
			method: "POST",
			body: JSON.stringify({
				query: /* GraphQL */ `
					query GetProductList {
						products(first: 10) {
							id
							name
							description
							images {
								url
							}
							price
						}
					}
				`,
			}),

			headers: {
				"Content-Type": "application/json",
			},
		},
	);
	console.log(res);

	const grapglResponse =
		(await res.json()) as GraphQLResponse<ProductsGraphqlResponse>;
	if (grapglResponse.errors) {
		throw new Error(grapglResponse.errors[0].message);
	}

	return grapglResponse.data.products.map((product) => {
		return {
			id: product.id,
			category: "",
			name: product.name,
			price: product.price,
			description: product.description,
			coverImage: {
				src: product.images[0].url,
				alt: product.name,
			},
		};
	});
};

export const getProductById = async (id: string): Promise<ProductItemType> => {
	const res = await fetch(`${BASE_URL}/products/${id}`);
	const productsResponse = (await res.json()) as ProductResponseItem;
	return mapProductResponseItemToProductItemType(productsResponse);
};

const mapProductResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	const { id, category, image, price, title, description } = product;
	return {
		id,
		category,
		name: title,
		price,
		description,
		coverImage: {
			src: image,
			alt: title,
		},
	} as ProductItemType;
};
