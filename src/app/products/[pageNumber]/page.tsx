import { getProductsList, getProductsTotal, PRODUCTS_TO_TAKE } from "@/api";
import { getPages, getSkip } from "@/utils";
import { Products } from "@/ui/organisms/Products";

export async function generateStaticParams() {
	const total = await getProductsTotal();
	const pages = getPages(total, PRODUCTS_TO_TAKE);
	return pages.map((page) => ({ pageNumber: String(page) }));
}

export default async function ProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const pageNumber = Number(params.pageNumber);

	const products = await getProductsList({
		first: PRODUCTS_TO_TAKE,
		skip: getSkip(pageNumber, PRODUCTS_TO_TAKE),
	});
	const total = await getProductsTotal();
	const pages = getPages(total, PRODUCTS_TO_TAKE);

	return <Products pages={pages} products={products} />;
}
