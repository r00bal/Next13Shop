import { type CommentType } from "@/api/reviews";
import { Comment } from "@/ui/molecules/Comment";

type CommentsListProps = {
	reviews?: CommentType[];
};

export const CommentsList = async ({ reviews }: CommentsListProps) => {
	return (
		<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
			{reviews?.map((review) => <Comment key={review.id} comment={review} />)}
		</div>
	);
};
