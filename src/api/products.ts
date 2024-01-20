import { BASE_URL } from "./const";
import { executeGraphql } from "./utils";
import { type ProductResponseItem } from "@/api/type";
import { ProductsGetListDocument } from "@/gql/graphql";
import type { ProductItemType } from "@/ui/molecules/type";

export const getAllProductsNumber = async (): Promise<number> => {
	const res = await fetch(`${BASE_URL}/products`);
	const productsNumber = ((await res.json()) as ProductResponseItem[]).length;
	return productsNumber;
};

export const getProductsList = async (): Promise<ProductItemType[]> => {
	const grapglResponse = await executeGraphql(ProductsGetListDocument, {});

	return grapglResponse.products.map((product) => {
		return {
			id: product.id,
			category: product.categories[0]?.name || "",
			name: product.name,
			price: product.price,
			description: product.description,
			coverImage: product.images[0] && {
				src: product.images[0]?.url,
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
