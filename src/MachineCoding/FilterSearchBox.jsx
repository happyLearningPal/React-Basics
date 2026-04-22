import React, { useState } from "react";

export const FilterSearchBox = () => {
	const [data, setData] = useState("");
	const productList = [
		"blue pant",
		"black pant",
		"blue shirt",
		"black shoes",
		"brown shoes",
		"white pant",
		"white shoes",
		"red shirt",
		"gray pant",
		"white shirt",
		"golden shoes",
		"dark pant",
		"pink shirt",
		"yellow pant",
	];
	const [list, setList] = useState(productList);

	const handleInputChange = (e) => {
		const val = e.target.value;
		setData(val);
		const filteredData = productList.filter((item) => item.includes(val));
		setList(filteredData);
	};

	return (
		<div>
			<h2>FilterSearchBox</h2>
			<input
				type="text"
				placeholder="Search by text"
				onChange={handleInputChange}
				value={data}
			/>
			<br />
			{list.map((item, index) => {
				return <p key={index}>{item}</p>;
			})}
		</div>
	);
};
