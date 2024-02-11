import { ProductList } from "./ProductList";
import { getProductsListByCategory } from "@/api/products";
import { type ProductGetByIdQuery } from "@/gql/graphql";

type SimilarProductsProps = {
	slug: NonNullable<
		ProductGetByIdQuery["product"]
	>["categories"][number]["slug"];
};

export const SimilarProducts = async ({ slug }: SimilarProductsProps) => {
	const products = await getProductsListByCategory({ first: 4, slug, skip: 0 });
	return (
		<div data-testid="related-products">
			<ProductList products={products} />
		</div>
	);
};
