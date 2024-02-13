import { getCollectionDescBySlug } from "@/api/collections";
import { getProductsByCollectionSlug } from "@/api/products";
import { DescriptionCard } from "@/ui/atoms/DescriptionCard";
import { ProductList } from "@/ui/organisms/ProductList";

const CollectionPage = async ({
	params: { slug },
}: {
	params: { slug: string };
}) => {
	const products = await getProductsByCollectionSlug(slug);
	const [collection] = await getCollectionDescBySlug(slug);

	return (
		<div>
			<div className="bg-slate-50">
				{collection && <DescriptionCard content={collection} />}
			</div>
			<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
				{products && <ProductList products={products} />}
			</section>
		</div>
	);
};

export default CollectionPage;
