import { getProductById } from "@/api/products";

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	return <h1>Product {product.name}</h1>;
}
