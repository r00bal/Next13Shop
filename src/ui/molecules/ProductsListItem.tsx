import Link from "next/link";
import { type Route } from "next";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductListItem = ({
	product,
}: {
	product: ProductListItemFragment;
}) => {
	const { images, name, ...rest } = product;
	const { url } = images?.[0] || {};
	return (
		<li>
			<Link href={`/product/${product.id}` as Route<string>}>
				<article>
					{url && <ProductCoverImage alt={name} src={url} />}
					<ProductListItemDescription product={{ name, ...rest }} />
				</article>
			</Link>
		</li>
	);
};
