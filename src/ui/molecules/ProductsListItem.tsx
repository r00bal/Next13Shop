import type { ProductListItemProps } from "./type";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
