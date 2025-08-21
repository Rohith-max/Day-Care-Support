import React from "react";

export default function PolicyIcon({ width = 20, height = 20, className = "" }) {
	return (
		<img
			src={new URL("../assets/svg/policy-icon.svg", import.meta.url).href}
			width={width}
			height={height}
			alt="Policy"
			className={className}
		/>
	);
}


