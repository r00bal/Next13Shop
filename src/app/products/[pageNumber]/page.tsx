import { Suspense } from "react";
import { Products } from "@/ui/organisms/Products";
import { Spinner } from "@/ui/atoms/Spinner";

export default async function ProductsPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	return (
		<Suspense fallback={<Spinner size={32} color="blue" />}>
			<Products pageNumber={Number(params.pageNumber)} />
		</Suspense>
	);
}
