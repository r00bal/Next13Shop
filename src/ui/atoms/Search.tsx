"use client";

import { type Route } from "next";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const debounceTyping = <T,>(fn: (value: T) => void, delay: number = 300) => {
	let timeoutId: NodeJS.Timeout;
	return (value: T) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn(value);
		}, delay);
	};
};

export const Search = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	const handleInputChange = (text: string): void => {
		const params = new URLSearchParams(searchParams);
		params.set("search", text);
		const pathWithQuery = (pathname +
			"?" +
			createQueryString("search", text)) as Route<string>;
		router.push(pathWithQuery);
	};

	const debouncedHandleChange = debounceTyping<string>(handleInputChange, 800);

	return (
		<div className="relative my-2 inline-block">
			<input
				onChange={(e) => debouncedHandleChange(e.target.value)}
				type="text"
				placeholder="Search"
				className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
			/>
		</div>
	);
};
