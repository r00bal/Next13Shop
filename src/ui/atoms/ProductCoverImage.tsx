import NextImage from "next/image";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductCoverImageProps = {
	src: ProductListItemFragment["images"][number]["url"];
	alt: ProductListItemFragment["name"];
};

export const ProductCoverImage = ({ alt, src }: ProductCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<NextImage
				alt={alt}
				width="256"
				height="256"
				src={src}
				className="w-full object-contain object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
