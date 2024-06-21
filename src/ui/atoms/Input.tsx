type InputProps = { title: string; name: string; type?: string };

export const Input = ({ title, name, type }: InputProps) => {
	return (
		<label>
			<span className="text-xs text-gray-700">{title}</span>
			<input
				className=" mt-1 block h-10 w-full rounded-md border-gray-300 p-1 text-sm font-light text-zinc-900 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				name={name}
				type={type}
			/>
		</label>
	);
};
