import { BASE_URL } from "./const";
import { type ProductResponseItem } from "@/api/type";
import type { ProductItemType } from "@/ui/molecules/type";

type getProductsListProps = {
	take?: number;
	page?: number;
};

export const getAllProductsNumber = async (): Promise<number> => {
	const res = await fetch(`${BASE_URL}/products`);
	const productsNumber = ((await res.json()) as ProductResponseItem[]).length;
	return productsNumber;
};

export const getProductsList = async ({
	take = 4,
	page = 1,
}: getProductsListProps) => {
	const offset = (page - 1) * take;
	const res = await fetch(`${BASE_URL}/products?take=${take}&offset=${offset}`);
	const total = await getAllProductsNumber();
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(
		mapProductResponseItemToProductItemType,
	);
	return { products, total };
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
