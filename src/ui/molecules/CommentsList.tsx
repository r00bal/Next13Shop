import { type ReviewListItemFragment } from "@/gql/graphql";
import { Comment } from "@/ui/molecules/Comment";

type CommentsListProps = {
	reviews?: ReviewListItemFragment[];
};

export const CommentsList = async ({ reviews }: CommentsListProps) => {
	return (
		<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
			{reviews?.map((review) => <Comment key={review.id} comment={review} />)}
		</div>
	);
};
