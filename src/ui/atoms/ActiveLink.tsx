"use client";
import Link, { type LinkProps } from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type ActiveLinkProps<T extends string> = {
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
} & LinkProps<T>;

export const ActiveLink = <T extends string>({
	children,
	href,
	className = "text-blue-400 hover:text-blue-600",
	activeClassName = "underline",
	...props
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	const isActive =
		pathname === href || (!props.exact && typeof href === "string" && pathname.startsWith(href));

	return (
		<Link {...props} href={href} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
};
