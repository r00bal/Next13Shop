import { RatingStarsDisplay } from "./RatingStarsDisplay";
import { Avatar } from "@/ui/atoms/Avatatar";

export const Comment = () => {
	return (
		<div className="py-12">
			<div className="flex items-center">
				<Avatar
					src={"https://avatars.githubusercontent.com/u/20425977?v=4"}
					alt={"Ross Weissnat"}
				/>

				<div className="ml-4">
					<h4 className="text-sm font-bold text-gray-900">Ross Weissnat</h4>
					<div className="mt-1 flex flex-row items-center gap-2">
						<p aria-hidden="true" className="small-caps text-sm text-gray-900">
							5/5
						</p>
						<RatingStarsDisplay rating={5} />
						<p className="sr-only">5 out of 5 stars</p>
					</div>
				</div>
			</div>
			<div className="">
				<p className="mb-2 mt-4 space-y-6 text-sm font-bold text-gray-600">
					Accusantium vapulus timidus.
				</p>
				<p className="mt-2 text-sm italic text-gray-600">
					Subiungo causa verbera valde appello cupiditas placeat. Curvo tero
					arma quo minus cum ait amoveo. Degusto libero animi.
				</p>
				<p className="mt-2 text-sm italic text-gray-600">
					Abstergo summopere stultus damno tutamen. Subseco aestus umbra ascisco
					abeo pectus. Caveo doloremque suppono curatio sublime ciminatio deleo
					sumptus sponte.
				</p>
				<p className="mt-2 text-sm italic text-gray-600">
					Delectatio ademptio adeo summopere occaecati sopor voluptates commodo.
					Solus deripio culpo uterque theologus strenuus necessitatibus
					asperiores quae certus. Titulus absconditus possimus bis autus.
				</p>
			</div>
		</div>
	);
};
