import { ProductsGetListBySearchQuery } from "@/api";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage({
	searchParams,
}: {
	searchParams?: { query: string };
}) {
	const products = await ProductsGetListBySearchQuery(searchParams?.query);

	if (!products || products?.length === 0) {
		return <div>No products found</div>;
	}

	return <ProductList products={products} />;
}
