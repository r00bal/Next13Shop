export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export type Rating = {
	rate: number;
	count: number;
};

export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export interface ProductsGraphqlResponse {
	products: {
		id: string;
		name: string;
		description: string;
		images: {
			url: string;
		}[];
		price: number;
	}[];
}
