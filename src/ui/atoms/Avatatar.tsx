import NextImage from "next/image";
import DefaultAvatar from "@/assets/default-avatar-portrait.jpg";

export const Avatar = ({ src, alt }: { src?: string; alt?: string }) => (
	<NextImage
		alt={alt || "Profile default avatar"}
		width="48"
		height="48"
		src={src || DefaultAvatar}
		className="h-12 w-12 rounded-full"
	/>
);
