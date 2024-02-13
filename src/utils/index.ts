export const getPages = (total: number, productsToTake: number) => {
	const numberOfPages = Math.ceil(total / productsToTake);
	const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
	return pages;
};

export const getSkip = (pageNumber: number, productsToTake: number) => {
	if (pageNumber === 0) return 0;
	return (pageNumber - 1) * productsToTake;
};
