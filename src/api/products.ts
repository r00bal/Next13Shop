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
	type VariantFragment,
	ProductsGetListBySearchQueryDocument,
	type ProductsGetListBySearchQueryQueryVariables,
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
	const { product } = await executeGraphql(ProductGetByIdDocument, { id });
	const isVariantArray =
		product?.variants &&
		Array.isArray(product?.variants) &&
		product?.variants[0] &&
		product?.variants[0] &&
		product?.variants[0].hasOwnProperty("id");
	return product
		? {
				...product,
				variants: isVariantArray
					? (product?.variants as VariantFragment[])
					: [],
		  }
		: null;
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

export const ProductsGetListBySearchQuery = async (
	search?: ProductsGetListBySearchQueryQueryVariables["search"],
) => {
	const grapglResponse = await executeGraphql(
		ProductsGetListBySearchQueryDocument,
		{ search },
	);
	return grapglResponse.products;
};
