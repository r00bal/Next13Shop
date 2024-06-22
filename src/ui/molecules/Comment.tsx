import { RatingStarsDisplay } from "./RatingStarsDisplay";
import { type CommentType } from "@/api/reviews";
import { Avatar } from "@/ui/atoms/Avatatar";

type CommentProps = { comment: CommentType };

export const Comment = ({ comment }: CommentProps) => {
	const { name, content, rating, headline, picture } = comment;
	return (
		<div className="py-12">
			<div className="flex items-center">
				<Avatar src={picture || ""} alt={name} />

				<div className="ml-4">
					<h4 className="text-sm font-bold text-gray-900">{headline}</h4>
					<div className="mt-1 flex flex-row items-center gap-2">
						<p aria-hidden="true" className="small-caps text-sm text-gray-900">
							{rating}/5
						</p>
						<RatingStarsDisplay rating={rating} />
						<p className="sr-only">5 out of 5 stars</p>
					</div>
				</div>
			</div>
			<div className="">
				<p className="mb-2 mt-4 space-y-6 text-sm font-bold text-gray-600">
					{name}
				</p>
				<p className="mt-2 text-sm italic text-gray-600">{content}</p>
			</div>
		</div>
	);
};
