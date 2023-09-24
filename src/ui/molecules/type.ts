export type ProductListItemProps = {
	product: {
		id: string;
		name: string;
		category: string;
		price: number;
		coverImage: {
			src: string;
			alt: string;
		};
	};
};
