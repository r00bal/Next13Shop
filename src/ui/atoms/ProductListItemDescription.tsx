import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: Pick<ProductListItemFragment, "name" | "categories" | "price">;
};

export const ProductListItemDescription = ({
	product: { name, categories, price },
}: ProductListItemProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-slate-700">{name}</h3>
				<p
					className="text-sm font-medium text-gray-500"
					data-testid="product-category"
				>
					{categories[0]?.name}
				</p>
			</div>
			<p
				className="text-sm font-medium text-slate-900"
				data-testid="product-price"
			>
				{price}$
			</p>
		</div>
	);
};
