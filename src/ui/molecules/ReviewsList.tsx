import { type ReviewsType } from "@/api/reviews";
import { Review } from "@/ui/molecules/Review";

type ReviewsListProps = {
	reviews?: ReviewsType[];
};

export const ReviewsList = ({ reviews }: ReviewsListProps) => {
	return (
		<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
			{reviews?.map((review) => <Review key={review.id} review={review} />)}
		</div>
	);
};
