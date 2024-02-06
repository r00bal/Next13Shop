import { getCollectionDescBySlug } from "@/api/collections";
import { getProductsByCategorySlug } from "@/api/products";

const CollectionPage = async ({
	params: { slug },
}: {
	params: { slug: string };
}) => {
	const products = await getProductsByCategorySlug(slug);
	const collection = await getCollectionDescBySlug(slug);

	return (
		<div>
			<h1>Collection Page {slug}</h1>
			<pre>{JSON.stringify(products, null, 2)}</pre>
			<pre>{JSON.stringify(collection[0], null, 2)}</pre>
		</div>
	);
};

export default CollectionPage;
