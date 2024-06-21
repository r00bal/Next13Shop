import { RatingStar } from "../atoms/RatingStar";

export const RatingStarsDisplay = ({
	rating,
	length = 5,
}: {
	rating: number;
	length?: number;
}) => {
	const ratingStars = Array(length)
		.fill(0)
		.map((_, index) => {
			return {
				id: index,
				checked: index <= rating - 1,
			};
		});

	return (
		<div className="flex items-center">
			{ratingStars.map(({ id, checked }) => (
				<RatingStar key={id} id={id} checked={checked} />
			))}
		</div>
	);
};
