import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navbar = () => {
	return (
		<nav>
			<ul className="flex justify-center space-x-4">
				<li key="home">
					<ActiveLink exact href="/">
						Home
					</ActiveLink>
				</li>
				<li key="products">
					<ActiveLink exact href="/products">
						Products
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
