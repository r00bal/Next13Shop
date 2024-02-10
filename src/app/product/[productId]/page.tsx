import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductPageItemDescription } from "@/ui/atoms/ProductPageItemDescription";
import { SimilarProducts } from "@/ui/organisms/SimilarProducts";

export async function generateStaticParams() {
	const products = await getProductsList({});
	console.log(products);

	return products.map((product) => ({ productId: product.id }));
}

export default async function ProductPage({
	params: { productId },
}: {
	params: { productId: string };
}) {
	const product = await getProductById(productId);
	const { categories } = product || {};
	const { slug } = categories?.[0] || {};
	return (
		<section className="flex flex-grow flex-col">
			<article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{product?.images[0]?.url && (
					<ProductCoverImage alt={product.name} src={product?.images[0]?.url} />
				)}
				{product && <ProductPageItemDescription product={product} />}
			</article>
			{slug && <SimilarProducts slug={slug} />}
		</section>
	);
}
