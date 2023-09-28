"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
	children: React.ReactNode;
	href: string;
	className?: string;
};

export const ActiveLink = ({ children, href }: ActiveLinkProps) => {
	const pathname = usePathname();

	const isActive = pathname === href;
	return (
		<Link
			href={href}
			className={clsx(`text-blue-400 hover:text-blue-600`, { underline: isActive })}
		>
			{children}
		</Link>
	);
};
