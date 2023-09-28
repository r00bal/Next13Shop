import { type ProductListItemProps } from "@/ui/molecules/type";
import { ProductList } from "@/ui/organisms/ProductList";

const products: ProductListItemProps[] = [
	{
		product: {
			id: "1",
			name: "Surfboard",
			category: "Sports",
			price: 100,
			coverImage: {
				src: "/product_1.jpeg",
				alt: "Surfboard",
			},
		},
	},
	{
		product: {
			id: "2",
			name: "Surfboard",
			category: "Sports",
			price: 100,
			coverImage: {
				src: "/product_2.jpeg",
				alt: "Surfboard",
			},
		},
	},
	{
		product: {
			id: "3",
			name: "Surfboard wood",
			category: "Sports",
			price: 100,
			coverImage: {
				src: "/product_3.jpeg",
				alt: "Surfboard",
			},
		},
	},
	{
		product: {
			id: "4",
			name: "Surfboard",
			category: "Sports",
			price: 100,
			coverImage: {
				src: "/product_4.jpeg",
				alt: "Surfboard",
			},
		},
	},
];

export default function ProductsPage() {
	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
