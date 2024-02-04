import NextImage from "next/image";
import Link from "next/link";
import { type CollectionsGetListQuery } from "@/gql/graphql";

type CollectionsListProps = {
	collections: CollectionsGetListQuery["collections"];
};

export const CollectionsList = ({ collections }: CollectionsListProps) => {
	return (
		<ul
			data-testid="collections-list"
			className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			{collections.map((collection) => (
				<li key={collection.id}>
					<Link href={`collections/${collection.slug}` as Route<string>}>
						<NextImage
							alt={collection.name}
							width="256"
							height="256"
							src={collection.image.url}
							className="w-full object-contain object-center p-4 transition-transform hover:scale-105"
						/>{" "}
						<h3>{collection.name}</h3>
					</Link>
				</li>
			))}
		</ul>
	);
};
