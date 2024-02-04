import NextImage from "next/image";
import Link from "next/link";
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
							<li className="group relative" key={collection.id}>
								{collection.image?.url && (
									<NextImage
										width={300}
										height={300}
										src={collection.image.url}
										className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white transition group-hover:scale-110 group-hover:opacity-75 sm:h-64"
										alt={collection.name}
									/>
								)}

								<h3 className="mt-2 font-bold text-slate-700">
									<Link href={`/collections/${collection.slug}`}>
										<span className="absolute inset-0"></span>
										{collection.name}
									</Link>
								</h3>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
