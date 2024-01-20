export type ProductItemType = {
	id: string;
	name: string;
	category: string;
	price: number;
	description: string;
	coverImage?: {
		src: string;
		alt: string;
	};
};

export type ProductListItemProps = {
	product: ProductItemType;
};

export type ProductPageItemProps = {
	product: ProductItemType;
};
