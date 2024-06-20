import { ImageResponse } from "next/server";
import { getProductById } from "@/api";

export const runtime = "edge";
export const contentType = "image/png";

export type OpenGraphImageProps = {
	params: { productId: string };
};

export default async function OpenGraphImage({
	params: { productId },
}: OpenGraphImageProps) {
	const product = await getProductById(productId);

	if (!product || !product.images[0] || !product.categories[0]) {
		return new ImageResponse(<>Not found</>);
	}
	const { name, description, images } = product;
	const { url } = images?.[0] || {};
	return new ImageResponse(
		(
			<div tw="w-full text-white h-full flex flex-col items-center justify-center text-8xl">
				<p tw="font-sans uppercase m-0 p-0 text-[101px] leading-4">{name}</p>
				<p tw="font-serif m-0 p-0 font-black">{description}</p>
				<img
					src={url}
					alt={name}
					style={{
						width: "40%",
					}}
				/>
			</div>
		),
	);
}
