import { Suspense } from "react";
import { CommentsForm } from "../molecules/CommentsForm";
import { CommentsList } from "@/ui/molecules/CommentsList";
import { getCommentsList } from "@/api/reviews";

export const Comments = async ({ productId }: { productId: string }) => {
	const reviews = await getCommentsList({ id: productId });
	console.log({ reviews });

	// const [otimisticReviews, addOptimisticReview] = useOptimistic<
	// 	ReviewListItemFragment[],
	// 	ReviewListItemFragment
	// >(reviews, (state, newReview) => [...state, newReview]);

	return (
		<>
			<CommentsForm productId={productId} onAddReview={() => ""} />
			<Suspense fallback>
				<CommentsList reviews={reviews} />
			</Suspense>
		</>
	);
};
