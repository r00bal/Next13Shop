"use client";

import { type Route } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";

export const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const inputRef = useRef<HTMLInputElement>(null);

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
		params.set(QUERY, text);

		const pathWithQuery = ("/search" +
			"?" +
			createQueryString(QUERY, text)) as Route<string>;
		router.push(pathWithQuery);
		if (!inputRef.current) return;
		inputRef.current.value = text;
	};

	const debouncedHandleChange = debounceTyping<string>(handleInputChange, 800);

	const handleClearInput = () => {
		handleInputChange("");
	};
	return (
		<div className="relative my-2 inline-block">
			<input
				ref={inputRef}
				onChange={(e) => debouncedHandleChange(e.target.value)}
				type="text"
				placeholder="Search"
				className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
			/>
			<svg
				onClick={handleClearInput}
				className="absolute right-0 top-0 mr-2 mt-2"
				width="20"
				height="20"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
			</svg>
		</div>
	);
};

const debounceTyping = <T,>(fn: (value: T) => void, delay: number = 300) => {
	let timeoutId: NodeJS.Timeout;
	return (value: T) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn(value);
		}, delay);
	};
};

export const QUERY = "query";
