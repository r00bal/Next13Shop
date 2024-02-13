import { getCollectionsList } from "@/api/collections";
import { getProductsListWithBestRatings } from "@/api/products";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function HomePage() {
	const products = await getProductsListWithBestRatings({ first: 4 });
	const collections = await getCollectionsList();

	return (
		<>
			<section>
				<CollectionsList collections={collections} />
			</section>
			<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
				<ProductList products={products} />
			</section>
		</>
	);
}
