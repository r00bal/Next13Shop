import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function HomePage() {
	const { products } = await getProductsList({ take: 4 });

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<div>Home Page</div>
			<ProductList products={products} />
		</section>
	);
}
