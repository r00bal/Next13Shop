import { Suspense } from "react";
import { CommentsForm } from "../molecules/CommentsForm";
import { CommentsList } from "@/ui/molecules/CommentsList";

export const Comments = ({ productId }: { productId: string }) => {
	return (
		<>
			<CommentsForm productId={productId} />
			<Suspense fallback={<div>Loading...</div>}>
				<CommentsList productId={productId} />
			</Suspense>
		</>
	);
};
