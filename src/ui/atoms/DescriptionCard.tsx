import type { CollectionDescriptionFragment } from "@/gql/graphql";

type DescriptionCardProps = {
	content: CollectionDescriptionFragment;
};

export const DescriptionCard = ({
	content: { name, description },
}: DescriptionCardProps) => {
	return (
		<div className="mx-auto max-w-7xl px-8 py-12">
			<h1 className="text-3xl font-bold tracking-tight text-slate-900">
				{name}
			</h1>
			<p className="mt-4 max-w-2xl text-base text-slate-700">{description}</p>
		</div>
	);
};
