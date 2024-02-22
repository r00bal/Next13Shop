import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Search } from "@/ui/atoms/Search";
type NavLinkType = {
	href: Route<string>;
	label: string;
};
const navLinks: NavLinkType[] = [
	{ href: "/", label: "Home" },
	{ href: "/products", label: "All" },
	{ href: `/categories/t-shirts` as Route<string>, label: "T-shirts" },
	{ href: "/categories/hoodies" as Route<string>, label: "Hoodies" },
	{ href: "/categories/accessories" as Route<string>, label: "Accessories" },
];

export const Navbar = () => {
	return (
		<nav className=" w-full  border-b border-gray-300" role="navigation">
			<ul className="m-auto flex h-16 w-full max-w-7xl items-center justify-between ">
				{navLinks.map(({ href, label }) => (
					<li key="home" className="h-full px-5">
						<ActiveLink exact={href === "/"} href={href}>
							{label}
						</ActiveLink>
					</li>
				))}
				<li key="search" className="ml-auto">
					<Search />
				</li>
			</ul>
		</nav>
	);
};
