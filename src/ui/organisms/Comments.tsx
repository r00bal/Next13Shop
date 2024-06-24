"use client";
import { useOptimistic } from "react";

import { CommentsForm } from "../molecules/CommentsForm";
import { CommentsList } from "../molecules/CommentsList";
import { type CommentType } from "@/api/reviews";

export type CommentsProps = {
	reviews: CommentType[];
	productId: string;
};

export const Comments = ({ productId, reviews }: CommentsProps) => {
	const [optimisticReviews, addOptimisticReview] = useOptimistic<
		CommentType[],
		CommentType
	>(reviews, (state, newReview) => {
		return [...state, newReview];
	});

	return (
		<div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-16">
			<CommentsForm productId={productId} onAddReview={addOptimisticReview} />
			<CommentsList reviews={optimisticReviews} />
		</div>
	);
};
