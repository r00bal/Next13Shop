export const RatingStar = ({
	id,
	checked,
	hovered,
}: {
	id: number;
	checked: boolean;
	hovered?: boolean;
}) => {
	return (
		<svg
			key={id}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			className={`lucide lucide-star h-5 w-5 flex-shrink-0 cursor-pointer fill-current ${
				checked || hovered
					? hovered
						? "text-yellow-100"
						: "text-yellow-400"
					: "text-gray-300"
			}`}
			aria-hidden="true"
		>
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
		</svg>
	);
};
