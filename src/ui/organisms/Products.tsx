import { Pagination } from "./Pagination";
import { ProductList } from "./ProductList";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductsProps = {
	pages: number[];
	products: ProductListItemFragment[];
};

export const Products = async ({ pages, products }: ProductsProps) => {
	return (
		<>
			<ProductList products={products} />
			<Pagination pages={pages} />
		</>
	);
};
