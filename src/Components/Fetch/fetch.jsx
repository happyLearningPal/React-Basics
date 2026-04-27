import React, { useEffect, useState } from "react";
import "./fetchCall";

export const Fetch = () => {
	const [list, setList] = useState([]);

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1",
			);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const data = await response.json();
			setList(data);
		} catch (error) {
			console.log("Error:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <div>diff ways to call fetch : {list.length}</div>;
};
