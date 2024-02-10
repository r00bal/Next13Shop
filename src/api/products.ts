import { executeGraphql } from "./utils";
import {
	CategoriesGetQuantityBySlugDocument,
	ProductGetByIdDocument,
	ProductsGetListByCategorySlugDocument,
	ProductsGetListDocument,
	type ProductsGetListQueryVariables,
	ProductsGetQuantityDocument,
	type ProductsGetListByCategorySlugQueryVariables,
	type CategoriesGetQuantityBySlugQueryVariables,
	type ProductGetByIdQueryVariables,
	ProductsGetListWithBestRatingsDocument,
	type ProductsGetListWithBestRatingsQueryVariables,
	ProductsGetListByCollectionSlugDocument,
	type ProductsGetListByCollectionSlugQueryVariables,
} from "@/gql/graphql";

export const getProductsListByCategory = async ({
	first,
	skip,
	slug,
}: ProductsGetListByCategorySlugQueryVariables) => {
	const grapglResponse = await executeGraphql(
		ProductsGetListByCategorySlugDocument,
		{ first, skip, slug },
	);
	return grapglResponse.categories[0]?.products
		? grapglResponse.categories[0].products
		: [];
};

export const getProductsList = async ({
	first,
	skip,
}: ProductsGetListQueryVariables) => {
	const grapglResponse = await executeGraphql(ProductsGetListDocument, {
		first,
		skip,
	});
	return grapglResponse.products;
};

export const getProductsListWithBestRatings = async ({
	first,
}: ProductsGetListWithBestRatingsQueryVariables) => {
	const grapglResponse = await executeGraphql(
		ProductsGetListWithBestRatingsDocument,
		{
			first,
		},
	);

	return grapglResponse?.products ? grapglResponse.products : [];
};
export const getProductsTotal = async () => {
	const grapglResponse = await executeGraphql(ProductsGetQuantityDocument, {});
	return grapglResponse.productsConnection.aggregate.count;
};

export const getProductsTotalByCategory = async (
	slug: CategoriesGetQuantityBySlugQueryVariables["slug"],
) => {
	const grapglResponse = await executeGraphql(
		CategoriesGetQuantityBySlugDocument,
		{ slug },
	);
	return grapglResponse.categoriesConnection.aggregate.count;
};

export const getProductById = async (
	id: ProductGetByIdQueryVariables["id"],
) => {
	const grapglResponse = await executeGraphql(ProductGetByIdDocument, { id });
	return grapglResponse.product;
};

export const getProductsByCollectionSlug = async (
	slug: ProductsGetListByCollectionSlugQueryVariables["slug"],
) => {
	const grapglResponse = await executeGraphql(
		ProductsGetListByCollectionSlugDocument,
		{ slug },
	);
	return grapglResponse.products;
};
