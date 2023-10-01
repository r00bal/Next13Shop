import type { ProductItemType } from "@/ui//molecules/type";

export const ProductCoverImage = ({
	alt,
	src,
}: ProductItemType["coverImage"]) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				alt={alt}
				width="256"
				height="256"
				src={src}
				className="w-full object-contain object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
