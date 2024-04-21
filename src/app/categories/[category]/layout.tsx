import { SubHeader } from "@/ui/atoms/SubHeader";

const CategoryLayout = ({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { category: string };
}) => {
	const { category } = params || {};
	const title = category.charAt(0).toUpperCase() + category.slice(1);
	return (
		<>
			<div className="w-[100vw]">
				<SubHeader>
					<h2>{title}</h2>
				</SubHeader>
				{children}
			</div>
		</>
	);
};
export default CategoryLayout;
