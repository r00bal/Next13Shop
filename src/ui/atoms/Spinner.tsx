import React from "react";

type SpinnerProps = {
	size?: number;
	color?: string;
};

export const Spinner = ({ size = 24, color = "gray" }: SpinnerProps) => {
	const spinnerStyle = {
		width: `${size}px`,
		height: `${size}px`,
		border: `${size / 8}px solid ${color}`,
		borderTopColor: "transparent",
		borderRadius: "50%",
		animation: "spin 1s linear infinite",
	};

	return <div style={spinnerStyle} className="mx-auto"></div>;
};
