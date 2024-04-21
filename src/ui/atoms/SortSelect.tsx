export const SortSelect = () => {
	return (
		<select className="arrow-down-bg block w-48 cursor-pointer appearance-none rounded-md border-gray-300 px-2 py-1 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 lg:mt-1">
			<option value="weightedRating↓" data-testid="sort-by-rating">
				Rating (High to Low)
			</option>
			<option value="weightedRating↑" data-testid="sort-by-rating">
				Rating (Low to High)
			</option>
			<option value="name↑">Name (A-Z)</option>
			<option value="name↓">Name (Z-A)</option>
			<option value="price↑" data-testid="sort-by-price">
				Price (Low to High)
			</option>
			<option value="price↓" data-testid="sort-by-price">
				Price (High to Low)
			</option>
		</select>
	);
};
