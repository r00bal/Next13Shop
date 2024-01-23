import { Suspense } from "react";
import { Products } from "@/ui/organisms/Products";
import { Spinner } from "@/ui/atoms/Spinner";
import { getAllProductsNumber, PRODUCTS_TO_TAKE } from "@/api";
import { getPages } from "@/utils";

export async function generateStaticParams() {
	const total = await getAllProductsNumber();
	const pages = getPages(total, PRODUCTS_TO_TAKE);
	return pages.map((page) => ({ pageNumber: String(page) }));
}

export default async function ProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	console.log({ params });
	const pageNumber = Number(params.pageNumber);

	return (
		<Suspense fallback={<Spinner size={32} color="blue" />}>
			<Products pageNumber={pageNumber} category={params.category} />
		</Suspense>
	);
}
