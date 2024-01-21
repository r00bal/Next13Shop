import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
type NavLinkType = {
	href: Route<string>;
	label: string;
};
const navLinks: NavLinkType[] = [
	{ href: "/", label: "Home" },
	{ href: "/products/", label: "All" },
	{ href: `/categories/t-shirts` as Route<string>, label: "t-shirts" },
	{ href: "/categories/hoodies" as Route<string>, label: "hoodies" },
	{ href: "/categories/accessories" as Route<string>, label: "accessories" },
];

export const Navbar = () => {
	return (
		<nav>
			<ul className="flex justify-center space-x-4">
				{navLinks.map(({ href, label }) => (
					<li key="home">
						<ActiveLink exact href={href}>
							{label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
