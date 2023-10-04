import { type ProductResponseItem } from "@/api/type";
import type { ProductItemType } from "@/ui/molecules/type";

type getProductsListProps = {
	take?: number;
};
export const getProductsList = async ({
	take = 20,
}: getProductsListProps): Promise<ProductItemType[]> => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}`,
	);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(
		mapProductResponseItemToProductItemType,
	);
	return products;
};

export const getProductById = async (id: string): Promise<ProductItemType> => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
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
