"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "./actions";

export function ChangeQuantity({
	itemId,
	quantity,
	total,
}: {
	itemId: string;
	quantity: number;
	total: number;
}) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity({
						id: itemId,
						quantity: optimisticQuantity + 1,
						total: total * (optimisticQuantity + 1),
					});
				}}
			>
				+
			</button>
		</form>
	);
}
