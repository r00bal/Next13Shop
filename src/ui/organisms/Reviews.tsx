"use client";
import { useOptimistic } from "react";

import { ReviewForm } from "../molecules/ReviewForm";
import { ReviewsList } from "../molecules/ReviewsList";
import { RatingStarsDisplay } from "../molecules/RatingStarsDisplay";
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
	const ratingsCount = reviews.length;
	const avrageRating =
		reviews.reduce((acc, next) => acc + next.rating, 0) / ratingsCount;
	const ratingTitle = `${avrageRating} out of 5 stars`;
	const basedOnReviews = `Based on ${ratingsCount} review${
		ratingsCount > 1 ? "s" : ""
	}`;

	return (
		<div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-16">
			<div className="lg:col-span-4">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					Customer Reviews
				</h2>
				<div className="mt-3 flex items-center">
					<div title={ratingTitle}>
						<RatingStarsDisplay rating={avrageRating} />
						<p className="sr-only">{ratingTitle}</p>
					</div>

					<p className="ml-2 text-sm text-gray-900">{basedOnReviews}</p>
				</div>
				<div className="mt-6">
					<h3 className="sr-only">Review data</h3>
				</div>
				<div className="mt-10">
					<h3 className="text-lg font-medium text-gray-900">
						Share your thoughts
					</h3>
					<p className="mt-1 text-sm text-gray-600">
						If you’ve used this product, share your thoughts with other
						customers
					</p>
					<ReviewForm
						productId={productId}
						onAddOptimisticReview={addOptimisticReview}
					/>
				</div>
			</div>
			<ReviewsList reviews={optimisticReviews} />
		</div>
	);
};
