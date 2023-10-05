import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductPageItemDescription } from "@/ui/atoms/ProductPageItemDescription";

export async function generateStaticParams() {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const products = (await res.json()) as { id: string; title: string }[];

	return products.map((product) => ({ productId: product.id }));
}

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	return (
		<article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<ProductCoverImage {...product.coverImage} />
			<ProductPageItemDescription product={product} />
		</article>
	);
}
