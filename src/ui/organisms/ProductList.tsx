import { ProductListItem } from "@/ui/molecules/ProductsListItem";
import { type ProductListItemProps } from "@/ui/molecules/type";

type ProductListProps = { products: ProductListItemProps[] };
export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			data-testid="products-list"
			className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			{products.map(({ product }) => (
				<ProductListItem product={product} key={product.id} />
			))}
		</ul>
	);
};
