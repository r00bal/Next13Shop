import { Pagination } from "./Pagination";
import { ProductList } from "./ProductList";
import { getProductsList, PRODUCTS_TO_TAKE } from "@/api";
import { getPages } from "@/utils";

type ProductsProps = {
	pageNumber: number;
};
export const Products = async ({ pageNumber }: ProductsProps) => {
	const { products, total } = await getProductsList({
		take: PRODUCTS_TO_TAKE,
		page: pageNumber || 1,
	});
	const pages = getPages(total, PRODUCTS_TO_TAKE);

	return (
		<>
			<ProductList products={products} />
			<Pagination pages={pages} />
		</>
	);
};
