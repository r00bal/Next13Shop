import { CollectionsListItem } from "@/ui/molecules/CollectionsListItem";
import { type CollectionsGetListQuery } from "@/gql/graphql";

type CollectionsListProps = {
	collections: CollectionsGetListQuery["collections"];
};

export const CollectionsList = ({ collections }: CollectionsListProps) => {
	return (
		<div className="bg-gray-100">
			<div className="mx-auto max-w-7xl px-8">
				<div className="mx-auto py-8">
					<h2 className="sr-only">Collections</h2>
					<ul className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
						{collections.map((collection) => (
							<CollectionsListItem
								collection={collection}
								key={collection.id}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
