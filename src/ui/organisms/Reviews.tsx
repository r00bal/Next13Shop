"use client";
import { useOptimistic } from "react";

import { ReviewForm } from "../molecules/ReviewForm";
import { ReviewsList } from "../molecules/ReviewsList";
import { type ReviewsType } from "@/api/reviews";

export type ReviewsProps = {
	reviews: ReviewsType[];
	productId: string;
};

export const Reviews = ({ productId, reviews }: ReviewsProps) => {
	const [optimisticReviews, addOptimisticReview] = useOptimistic<
		ReviewsType[],
		ReviewsType
	>(reviews, (state, newReview) => {
		return [...state, newReview];
	});

	return (
		<div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-16">
			<ReviewForm
				productId={productId}
				onAddOptimisticReview={addOptimisticReview}
			/>
			<ReviewsList reviews={optimisticReviews} />
		</div>
	);
};
