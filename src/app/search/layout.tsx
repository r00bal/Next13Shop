import { Suspense } from "react";
import { type ChildrenType } from "../types";
import { Spinner } from "@/ui/atoms/Spinner";

export default function SearchLayout({ children }: ChildrenType) {
	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<Suspense fallback={<Spinner size={32} color="blue" />}>
				{children}
			</Suspense>
		</section>
	);
}
