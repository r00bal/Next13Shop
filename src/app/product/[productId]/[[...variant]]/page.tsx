import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductPageItemDescription } from "@/ui/atoms/ProductPageItemDescription";

import { getReviewsList } from "@/api/reviews";
import { SimilarProducts } from "@/ui/organisms/SimilarProducts";
import { Reviews } from "@/ui/organisms/Reviews";

// static build is turned off due to 'changed from static to dynamic at runtime ' error,  reason: cookies
// https://nextjs.org/docs/messages/app-static-to-dynamic-error

// export async function generateStaticParams() {
// 	const products = await getProductsList({});
// 	return products.map((product) => ({ productId: product.id }));
// }

export type ProductPageParams = {
	params: { productId: string; variant?: string[] };
};
export default async function ProductPage({
	params: { productId },
}: ProductPageParams) {
	const product = await getProductById(productId);
	const reviews = await getReviewsList({ id: productId });
	const { categories } = product || {};
	const { slug } = categories?.[0] || {};

	return (
		<section className="flex flex-grow flex-col">
			<article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{product?.images?.[0]?.url && (
					<ProductCoverImage
						alt={product?.name || ""}
						src={product?.images[0]?.url}
					/>
				)}
				{!!product && <ProductPageItemDescription product={product} />}
			</article>
			<Suspense fallback>{slug && <SimilarProducts slug={slug} />}</Suspense>
			<Reviews productId={productId} reviews={reviews} />
		</section>
	);
}
