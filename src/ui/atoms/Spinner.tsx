import React from "react";
import { FaSpinner } from "react-icons/fa";

type SpinnerProps = {
	size?: number;
	color?: string;
};

export const Spinner = ({ size = 24, color = "gray" }: SpinnerProps) => {
	return (
		<div className="flex items-center justify-center">
			<FaSpinner className={`animate-spin text-${color}-500`} size={size} />
		</div>
	);
};
