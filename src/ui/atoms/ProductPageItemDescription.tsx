import { type ProductListItemFragment } from "@/gql/graphql";

type ProductPageItemProps = {
	product: Pick<
		ProductListItemFragment,
		"name" | "categories" | "price" | "description"
	>;
};
export const ProductPageItemDescription = ({
	product: { name, categories, price, description },
}: ProductPageItemProps) => {
	return (
		<div className="flex flex-col px-6">
			<h1 className="text-3xl font-bold tracking-tight text-slate-900">
				{name}
			</h1>
			<span>{categories.map(({ name }) => name)}</span>
			<div className="mt-4 flex items-center">
				<div className="font-base small-caps text-lg text-slate-800">
					{price} zł
				</div>
			</div>
			<div className="mt-4 space-y-6">
				<p className="font-sans text-base text-slate-500">{description}</p>
			</div>
			<div className="mt-6 flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					className="h-5 w-5 flex-shrink-0 text-blue-500"
					aria-hidden="true"
				>
					<path d="M18 6 7 17l-5-5"></path>
					<path d="m22 10-7.5 7.5L13 16"></path>
				</svg>
				<p className="ml-1 text-sm font-semibold text-slate-500">In stock</p>
			</div>
			<div className="mt-auto">
				<button
					type="submit"
					data-testid="add-to-cart-button"
					className="inline-flex h-14 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6  text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};
