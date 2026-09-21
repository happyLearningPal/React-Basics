import React, { useState } from "react";

export const SearchFilter = () => {
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
	const [data, setData] = useState(productList);
	const [searchText, setSearchText] = useState("");

	const handleInputChange = (e) => {
		const text = e.target.value;
		setSearchText(text);
		if (text.length > 0) {
			const newArr = productList.filter((item) => item.includes(text));
			setData(newArr);
		} else {
			setData(productList);
		}
	};

	return (
		<div>
			<h2>SearchFilter</h2>
			<br />

			<input
				type="text"
				value={searchText}
				onChange={handleInputChange}
				placeholder="Enter text to search"
			/>
			<br />

			<ul>
				{data.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	);
};
