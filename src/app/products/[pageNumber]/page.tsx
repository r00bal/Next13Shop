import { Suspense } from "react";
import { Products } from "@/ui/organisms/Products";

export default async function ProductsPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Products pageNumber={Number(params.pageNumber)} />
		</Suspense>
	);
}
