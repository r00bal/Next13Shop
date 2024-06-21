import { Input } from "../atoms/Input";
import { RatingStarsDisplay } from "../molecules/RatingStarsDisplay";
import { Comment } from "../molecules/Comment";
import { RatingStarsInteractive } from "../molecules/RatingStarsInteractive";
export const Comments = () => {
	return (
		<div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-16">
			<div className="lg:col-span-4">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					Customer Reviews
				</h2>
				<div className="mt-3 flex items-center">
					<div title="3.6 out of 5 stars">
						<RatingStarsDisplay rating={4} />
						<RatingStarsInteractive initialRating={4} />
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
						If you’ve used this product, share your thoughts with other
						customers
					</p>
					<form
						data-testid="add-review-form"
						className="mt-2 flex flex-col gap-y-2"
					>
						<input type="hidden" value="UHJvZHVjdDox" name="productId" />
						<Input title="Review title" name="headlines" />
						<label>
							<span className="text-xs text-gray-700">Review content</span>
							<textarea
								className="mt-1 block max-h-48 min-h-[2.5rem] w-full rounded-md border-gray-300 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
								name="content"
							></textarea>
						</label>
						<div>
							<span className="text-xs text-gray-700">Rating</span>
							<fieldset className="stars-rating flex flex-row-reverse justify-end">
								<input
									className="sr-only"
									id="rating-5"
									type="radio"
									value="5"
									name="rating"
								/>
								<label htmlFor="rating-5">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="lucide lucide-star h-5 w-5 flex-shrink-0 text-gray-300"
										aria-hidden="true"
									>
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
									</svg>
									<span className="sr-only">5 stars</span>
								</label>
								<input
									className="sr-only"
									id="rating-4"
									type="radio"
									value="4"
									name="rating"
								/>
								<label htmlFor="rating-4">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="lucide lucide-star h-5 w-5 flex-shrink-0 text-gray-300"
										aria-hidden="true"
									>
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
									</svg>
									<span className="sr-only">4 stars</span>
								</label>
								<input
									className="sr-only"
									id="rating-3"
									type="radio"
									value="3"
									name="rating"
								/>
								<label htmlFor="rating-3">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="lucide lucide-star h-5 w-5 flex-shrink-0 text-gray-300"
										aria-hidden="true"
									>
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
									</svg>
									<span className="sr-only">3 stars</span>
								</label>
								<input
									className="sr-only"
									id="rating-2"
									type="radio"
									value="2"
									name="rating"
								/>
								<label htmlFor="rating-2">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="lucide lucide-star h-5 w-5 flex-shrink-0 text-gray-300"
										aria-hidden="true"
									>
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
									</svg>
									<span className="sr-only">2 stars</span>
								</label>
								<input
									className="sr-only"
									id="rating-1"
									type="radio"
									value="1"
									name="rating"
								/>
								<label htmlFor="rating-1">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="lucide lucide-star h-5 w-5 flex-shrink-0 text-gray-300"
										aria-hidden="true"
									>
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
									</svg>
									<span className="sr-only">1 star</span>
								</label>
							</fieldset>
						</div>
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
			<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
				<Comment />
			</div>
		</div>
	);
};
