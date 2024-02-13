import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Pagination = ({ pages }: { pages: number[] }) => {
	return (
		<nav
			className="mt-auto flex items-center justify-center border-t border-slate-200 px-4"
			role="navigation"
			aria-label="Pagination Navigation"
		>
			<ul className="-mt-px flex">
				{pages.map((page) => (
					<li key={page}>
						<ActiveLink
							className="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
							activeClassName="border-blue-500 text-blue-600"
							href={`/products/${page}`}
						>
							{page}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
