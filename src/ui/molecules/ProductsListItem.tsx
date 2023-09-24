import type { ProductListItemProps } from "./type";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export const ProductListItem = ({
	product: { category, coverImage, name, price },
}: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductCoverImage {...coverImage} />
				<ProductListItemDescription
					product={{
						name,
						category,
						price,
					}}
				/>
			</article>
		</li>
	);
};
