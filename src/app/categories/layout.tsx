import { Suspense } from "react";
import { type ChildrenType } from "../types";
import { Spinner } from "@/ui/atoms/Spinner";

export default function ProductLayout({ children }: ChildrenType) {
	return (
		<Suspense fallback={<Spinner size={32} color="blue" />}>
			{children}
		</Suspense>
	);
}
