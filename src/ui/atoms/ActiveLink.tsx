"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import { type ReactNode } from "react";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = <T extends string>({
	children,
	href,
	exact = true,
	className = "text-blue-400 hover:text-blue-600 h-full flex items-center justify-center",
	activeClassName = "border-b-2 border-blue-400",
	...props
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href
		: typeof href === "string" && pathname.startsWith(href);

	return (
		<Link
			{...props}
			href={href}
			className={clsx(className, isActive && activeClassName)}
		>
			{children}
		</Link>
	);
};
