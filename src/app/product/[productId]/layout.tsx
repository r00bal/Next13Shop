import type { Metadata } from "next";
import { type ChildrenType } from "../../types";
import { getProductById } from "@/api";

export async function generateMetadata({
	params: { productId },
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(productId);

	return {
		title: product?.name || "Product",
	};
}

export default function ProductLayout({ children }: ChildrenType) {
	return <section className="mx-auto grid max-w-7xl p-8">{children}</section>;
}
