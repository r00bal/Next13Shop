import { Suspense } from "react";
import { Spinner } from "@/ui/atoms/Spinner";
import { getProductsTotal, PRODUCTS_TO_TAKE } from "@/api";
import { getPages } from "@/utils";
import { ProductsAllView } from "@/ui/organisms/ProductsAllView";

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
	return (
		<Suspense fallback={<Spinner size={32} color="blue" />}>
			<ProductsAllView pageNumber={pageNumber} />
		</Suspense>
	);
}
