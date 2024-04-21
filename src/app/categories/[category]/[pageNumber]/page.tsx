import { type Metadata } from "next";
import {
	PRODUCTS_TO_TAKE,
	getProductsListByCategory,
	getProductsTotal,
	getProductsTotalByCategory,
} from "@/api";
import { getPages, getSkip } from "@/utils";
import { Products } from "@/ui/organisms/Products";

export async function generateMetadata({
	params: { category, pageNumber },
}: {
	params: { category: string; pageNumber: string };
}): Promise<Metadata> {
	return {
		title: `${category}: page ${pageNumber}`,
	};
}

export async function generateStaticParams() {
	const total = await getProductsTotal();
	const pages = getPages(total, PRODUCTS_TO_TAKE);
	return pages.map((page) => ({ pageNumber: String(page) }));
}

export default async function ProductsPage({
	params: { category, pageNumber: pageNumberProp },
}: {
	params: { category: string; pageNumber: string };
}) {
	const pageNumber = Number(pageNumberProp);
	const products = await getProductsListByCategory({
		first: PRODUCTS_TO_TAKE,
		skip: getSkip(pageNumber, PRODUCTS_TO_TAKE),
		slug: category,
	});
	const total = await getProductsTotalByCategory(category);
	const pages = getPages(total, PRODUCTS_TO_TAKE);
	return (
		<div className="sm:py-18 mx-auto w-full max-w-2xl px-8 py-12 sm:px-6 lg:max-w-7xl">
			<Products pages={pages} products={products} />
		</div>
	);
}
