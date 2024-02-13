import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ChildrenType } from "./types";
import { Navbar } from "@/ui/organisms/Navbar";

const inter = Inter({
	subsets: ["latin", "latin-ext"],
	variable: "--font-Inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "theszop",
	description: "Super szop with streetwear",
};

export default function RootLayout({ children }: ChildrenType) {
	return (
		<html lang="pl" className={inter.className}>
			<body className="flex min-h-screen flex-col">
				<Navbar />
				<main className="flex-grow">{children}</main>
				<footer>
					<p className="text-center"> All rights reserved</p>{" "}
				</footer>
			</body>
		</html>
	);
}
