import { type Route } from "next";
import { Suspense } from "react";
import { Search } from "@/ui/atoms/Search";
import { Cart } from "@/ui/atoms/Cart";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

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

export const Navbar = async () => {
	return (
		<nav
			className="flex w-full  items-center border-b border-gray-300 px-8"
			role="navigation"
		>
			<ul className="m-auto flex h-16 w-full max-w-7xl items-center  ">
				{navLinks.map(({ href, label }) => (
					<li key={label} className="h-full px-5">
						<ActiveLink exact={href === "/"} href={href}>
							{label}
						</ActiveLink>
					</li>
				))}
			</ul>

			<div className="m-auto flex h-16 w-full items-center justify-end">
				<Suspense>
					<Search />
				</Suspense>
				<Cart />
			</div>
		</nav>
	);
};
