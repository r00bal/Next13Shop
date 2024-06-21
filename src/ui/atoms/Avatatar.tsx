import NextImage from "next/image";

export const Avatar = ({ src, alt }: { src: string; alt: string }) => (
	<NextImage
		alt={alt}
		width="48"
		height="48"
		src={src}
		className="h-12 w-12 rounded-full"
	/>
);
