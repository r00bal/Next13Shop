import { Suspense } from "react";
import { ProductsByCategoryView } from "@/ui/organisms/ProductsByCategoryView";
import { Spinner } from "@/ui/atoms/Spinner";

//@TODO - generate static params for slug ?
// export async function generateStaticParams() {
// 	const total = await getAllProductsNumber();
// 	const pages = getPages(total, PRODUCTS_TO_TAKE);
// 	return pages.map((page) => ({ pageNumber: String(page) }));
// }

export default async function ProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const pageNumber = Number(params.pageNumber);

	return (
		<Suspense fallback={<Spinner size={32} color="blue" />}>
			<ProductsByCategoryView
				pageNumber={pageNumber}
				category={params.category}
			/>
		</Suspense>
	);
}
