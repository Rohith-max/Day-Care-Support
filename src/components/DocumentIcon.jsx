export default function DocumentIcon({ width = 88, height = 20, className = "" }) {
	return (
		<img
			src={new URL("../assets/svg/documents.svg", import.meta.url).href}
			width={width}
			height={height}
			className={className}
			alt="Documents"
		/>
	);
}