import { List } from "react-window";

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

export const VirtualizedList = () => {
	const Row = ({ index, style }) => {
		return <div style={style}>{items[index]}</div>;
	};

	return (
		<List
			rowComponent={Row}
			rowCount={items.length}
			rowHeight={20}
			rowProps={{ items }} // ✅ important
			style={{
				height: 200,
				width: 300,
				border: "1px solid #ccc",
			}}
		/>
	);
};
