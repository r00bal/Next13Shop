import { type ProductResponseItem } from "./[productId]/type";
import { type ProductItemType } from "@/ui/molecules/type";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const res = await fetch(
		"https://naszsklep-api.vercel.app/api/products?take=20",
	);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(
		({ id, category, image, price, title }): ProductItemType =>
			({
				id,
				category,
				name: title,
				price,
				coverImage: {
					src: image,
					alt: title,
				},
			}) as ProductItemType,
	);

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
