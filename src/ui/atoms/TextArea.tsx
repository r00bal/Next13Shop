export const TextArea = ({ label, name }: { label: string; name: string }) => {
	return (
		<label>
			<span className="text-xs text-gray-700">{label}</span>
			<textarea
				className="mt-1 block max-h-48 min-h-[2.5rem] w-full rounded-md border-gray-300 p-1 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
				name={name}
			></textarea>
		</label>
	);
};
