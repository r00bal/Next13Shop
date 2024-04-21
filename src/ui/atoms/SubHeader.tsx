import { type ChildrenType } from "@/app/types";

export const SubHeader = ({ children }: ChildrenType) => {
	return (
		<div className="bg-gray-100">
			<div className="mx-auto max-w-7xl px-8">
				<div className="mx-auto py-8">
					<div className="flex flex-row items-center justify-between">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};
