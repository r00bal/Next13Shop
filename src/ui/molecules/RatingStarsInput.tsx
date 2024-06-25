"use client";

import { Fragment, useState } from "react";
import { RatingStar } from "../atoms/RatingStar";

export const RatingStarsInput = ({
	initialRating = 0,
	length = 5,
	label,
	name,
}: {
	initialRating?: number;
	length?: number;
	label: string;
	name: string;
}) => {
	const [rating, setRating] = useState(() =>
		setInitialRating(initialRating, length),
	);
	const [hoveredStars, setHoveredStars] = useState(0);

	const checkedInputNumber = rating.filter((star) => star.checked).length;
	console.log({ checkedInputNumber, rating });

	const handleRatingChange = (newRating: number) => {
		const rateStar = rating[newRating - 1];
		const toggleOnReclick =
			rateStar &&
			rateStar?.checked &&
			newRating === rating.filter((star) => star.checked).length;
		if (toggleOnReclick) {
			setRating((state) =>
				state.map(({ index }) => ({ index, checked: false })),
			);
			return;
		}
		setRating((state) =>
			state.map(({ index }) => ({ index, checked: index <= newRating })),
		);
		handleMouseLeave();
	};

	const handleMouseLeave = () => {
		setHoveredStars(0);
	};

	const handleMouseEnter = (index: number) => {
		setHoveredStars(index + 1);
	};

	return (
		<div className="flex items-center">
			<span className="text-xs text-gray-700">{label}</span>
			<fieldset className="stars-rating flex flex-row justify-end">
				{rating.map(({ index, checked }) => {
					const isChecked = checkedInputNumber === index;
					return (
						<Fragment key={`rating-fragment-${index}`}>
							<input
								key={`rating-input-${index}`}
								id={`rating-${index}`}
								type="radio"
								value={index}
								name={name}
								checked={isChecked}
								className="sr-only"
							/>
							<label htmlFor={`rating-${index}`}>
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
								<span className="sr-only">{index} stars</span>
							</label>
						</Fragment>
					);
				})}
			</fieldset>
		</div>
	);
};

const setInitialRating = (initialRating: number, length: number) =>
	Array(length)
		.fill(0)
		.map((_, i) => {
			const index = i + 1;
			return {
				index: index,
				checked: index <= initialRating,
			};
		});
