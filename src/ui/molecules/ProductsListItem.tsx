import Link from "next/link";
import type { ProductListItemProps } from "@/ui/molecules/type";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export const ProductListItem = ({ product }: ProductListItemProps) => {
	console.log(product.id);

	return (
		<li>
			<Link href={`/products/${product.id}`}>
				<article>
					<ProductCoverImage {...product.coverImage} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
