import { Pagination } from "./Pagination";
import { ProductList } from "./ProductList";
import {
	getProductsTotalByCategory,
	getProductsListByCategory,
	PRODUCTS_TO_TAKE,
} from "@/api";
import { getPages, getSkip } from "@/utils";

type ProductsProps = {
	pageNumber: number;
	category: string;
};
export const ProductsByCategoryView = async ({
	pageNumber,
	category,
}: ProductsProps) => {
	const products = await getProductsListByCategory({
		first: PRODUCTS_TO_TAKE,
		skip: getSkip(pageNumber, PRODUCTS_TO_TAKE),
		slug: category,
	});
	const total = await getProductsTotalByCategory(category);
	const pages = getPages(total, PRODUCTS_TO_TAKE);

	return (
		<>
			<ProductList products={products} />
			<Pagination pages={pages} />
		</>
	);
};
