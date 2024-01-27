import { Pagination } from "./Pagination";
import { ProductList } from "./ProductList";
import { getProductsList, getProductsTotal, PRODUCTS_TO_TAKE } from "@/api";
import { getPages, getSkip } from "@/utils";

type ProductsProps = {
	pageNumber: number;
};

export const ProductsAllView = async ({ pageNumber }: ProductsProps) => {
	const products = await getProductsList({
		first: PRODUCTS_TO_TAKE,
		skip: getSkip(pageNumber, PRODUCTS_TO_TAKE),
	});
	const total = await getProductsTotal();
	const pages = getPages(total, PRODUCTS_TO_TAKE);

	return (
		<>
			<ProductList products={products} />
			<Pagination pages={pages} />
		</>
	);
};
