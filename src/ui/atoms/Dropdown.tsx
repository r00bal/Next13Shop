"use client";

import { useParams, useRouter } from "next/navigation";
import { type ProductPageParams } from "@/app/product/[productId]/[[...variant]]/page";

type DropdownProps = {
	options: {
		id?: string;
		name: string;
	}[];
};

export const Dropdown = ({ options }: DropdownProps) => {
	const params = useParams<ProductPageParams["params"]>();
	const router = useRouter();
	const variant = (params.variant || []).join("/");

	return (
		<div className="relative mt-6 inline-block">
			<select
				defaultValue={variant}
				onChange={(e) => {
					const variantName = e.target.value;
					const id = options.find((option) => option.name === variantName)?.id;
					router.push(`/product/${id}/${variantName}`);
				}}
				className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
			>
				{options.map((option) => (
					<option key={option.name} value={option.name}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
};
