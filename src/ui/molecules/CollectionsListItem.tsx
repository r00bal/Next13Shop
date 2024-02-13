import NextImage from "next/image";
import Link from "next/link";
import { type CollectionsGetListQuery } from "@/gql/graphql";

type CollectionsListItemProps = {
	collection: CollectionsGetListQuery["collections"][number];
};

export const CollectionsListItem = ({
	collection: {
		id,
		image: { url },
		name,
		slug,
	},
}: CollectionsListItemProps) => {
	return (
		<li className="group relative" key={id}>
			{url && (
				<NextImage
					width={300}
					height={300}
					src={url}
					className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white transition group-hover:scale-110 group-hover:opacity-75 sm:h-64"
					alt={name}
				/>
			)}

			<h3 className="mt-2 font-bold text-slate-700">
				<Link href={`/collections/${slug}`}>
					<span className="absolute inset-0"></span>
					{name}
				</Link>
			</h3>
		</li>
	);
};
