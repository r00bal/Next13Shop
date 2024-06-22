import { useRef } from "react";
import { Input } from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";
import { RatingStarsDisplay } from "../molecules/RatingStarsDisplay";
import { RatingStarsInput } from "../molecules/RatingStarsInput";
import { type CommentType } from "@/api/reviews";
import { addCommentAction } from "@/app/product/actions";

export const getReviewFormData = (formData: FormData) => {
	const { productId, headline, content, rating, name, email } =
		Object.fromEntries(
			Array.from(formData.entries()).map(([key, value]) => [
				key,
				String(value),
			]),
		);

	if (!productId || !headline || !content || !rating || !name || !email) {
		return;
	}
	return { productId, headline, content, rating, name, email };
};

export type AddCommentActionT = NonNullable<
	ReturnType<typeof getReviewFormData>
>;

export const CommentsForm = ({
	productId,
	onAddReview,
}: {
	productId: string;
	onAddReview: (action: CommentType) => void;
}) => {
	const formRef = useRef<HTMLFormElement>(null);
	return (
		<div className="lg:col-span-4">
			<h2 className="text-2xl font-bold tracking-tight text-gray-900">
				Customer Reviews
			</h2>
			<div className="mt-3 flex items-center">
				<div title="3.6 out of 5 stars">
					<RatingStarsDisplay rating={4} />
					<p className="sr-only">3.6 out of 5 stars</p>
				</div>
				<p className="ml-2 text-sm text-gray-900">Based on 292 reviews</p>
			</div>
			<div className="mt-6">
				<h3 className="sr-only">Review data</h3>
			</div>
			<div className="mt-10">
				<h3 className="text-lg font-medium text-gray-900">
					Share your thoughts
				</h3>
				<p className="mt-1 text-sm text-gray-600">
					If you’ve used this product, share your thoughts with other customers
				</p>
				<form
					ref={formRef}
					action={async (formaData) => {
						const newReview = getReviewFormData(formaData);
						if (!newReview) return;
						const randomId = Math.random().toString(36).substring(7);
						onAddReview({
							id: randomId,
							name: newReview.name || "",
							content: newReview.content,
							rating: Number(newReview.rating),
							picture: null,
							headline: newReview.headline,
						});
						formRef.current?.reset();
						await addCommentAction(newReview);
					}}
					data-testid="add-review-form"
					className="mt-2 flex flex-col gap-y-2"
				>
					<input type="hidden" value={productId} name="productId" />
					<Input title="Review title" name="headline" />
					<TextArea label="Review content" name="content" />
					<RatingStarsInput label="Rating" name="rating" />
					<Input title="Name" name="name" />
					<Input title="Email" name="email" type="email" />
					<button
						type="submit"
						className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-8 py-2 text-sm font-medium text-gray-50 hover:bg-gray-700 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					>
						Submit review
					</button>
				</form>
			</div>
		</div>
	);
};
