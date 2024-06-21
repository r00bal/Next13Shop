"use client";

import { useState } from "react";
import { RatingStar } from "../atoms/RatingStar";

const setInitialRating = (initialRating: number, length: number) =>
	Array(length)
		.fill(0)
		.map((_, index) => {
			return {
				index,
				checked: index <= initialRating - 1,
			};
		});

export const RatingStarsInteractive = ({
	initialRating,
	length = 5,
}: {
	initialRating: number;
	length?: number;
}) => {
	const [rating, setRating] = useState(() =>
		setInitialRating(initialRating, length),
	);
	const [hoveredStars, setHoveredStars] = useState(0);

	const handleRatingChange = (newRating: number) => {
		const rateStar = rating[newRating];
		const toggleOnReclick =
			rateStar &&
			rateStar?.checked &&
			newRating === rating.filter((star) => star.checked).length - 1;
		if (toggleOnReclick) {
			setRating((state) =>
				state.map(({ index }) => ({ index, checked: false })),
			);
			return;
		}
		setRating((state) =>
			state.map(({ index }) => ({ index, checked: index <= newRating })),
		);
	};

	const handleMouseLeave = () => {
		setHoveredStars(0);
	};

	const handleMouseEnter = (index: number) => {
		setHoveredStars(index + 1);
	};

	return (
		<div className="flex items-center">
			{rating.map(({ index, checked }) => (
				<span
					key={index}
					onClick={() => handleRatingChange(index)}
					onMouseLeave={() => handleMouseLeave()}
					onMouseEnter={() => handleMouseEnter(index)}
				>
					<RatingStar
						id={index}
						checked={!hoveredStars && checked}
						hovered={hoveredStars ? index < hoveredStars : false}
					/>
				</span>
			))}
		</div>
	);
};
