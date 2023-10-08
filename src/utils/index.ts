export const getPages = (total: number, productsToTake: number) => {
	const numberOfPages = Math.ceil(total / productsToTake);
	const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
	return pages;
};
