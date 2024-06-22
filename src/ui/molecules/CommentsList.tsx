import { getCommentsList } from "@/api/reviews";
import { Comment } from "@/ui/molecules/Comment";
export const CommentsList = async ({ productId }: { productId: string }) => {
	const comments = await getCommentsList({ id: productId });

	return (
		<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	);
};
