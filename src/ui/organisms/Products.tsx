import { Pagination } from "./Pagination";
import { ProductList } from "./ProductList";
import { getProductsList } from "@/api/products";

type ProductsProps = {
	pageNumber: number;
};
export const Products = async ({ pageNumber }: ProductsProps) => {
	const { products, total } = await getProductsList({
		take: PRODUCTS_TO_TAKE,
		page: pageNumber || 1,
	});
	const pages = Math.ceil(total / PRODUCTS_TO_TAKE);

	return (
		<>
			<ProductList products={products} />
			<Pagination pages={pages} />
		</>
	);
};

const PRODUCTS_TO_TAKE = 4;
