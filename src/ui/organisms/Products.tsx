import { Pagination } from "./Pagination";
import { ProductList } from "./ProductList";
import { getProductsList, PRODUCTS_TO_TAKE } from "@/api";
import { getPages } from "@/utils";

type ProductsProps = {
	pageNumber: number;
};
export const Products = async ({ pageNumber }: ProductsProps) => {
	const products = await getProductsList();
	const total = 14;
	const pages = getPages(total, PRODUCTS_TO_TAKE);
	console.log(pageNumber);

	return (
		<>
			<ProductList products={products} />
			<Pagination pages={pages} />
		</>
	);
};
