import React, { useEffect, useState } from "react";

export const Pagination = () => {
	//const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const resp = await fetch("https://jsonplaceholder.typicode.com/users");
				if (!resp.ok) {
					throw new Error("Something went wrong");
				}

				const result = await resp.json();
				setItems(result);
			} catch (error) {
				console.log("Error:", error);
			}
		}
		fetchData();
	}, []);

	const itemsPerPage = 5;

	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const currentItems = items.slice(startIndex, endIndex);

	const totalPages = Math.ceil(items.length / itemsPerPage);

	return (
		<div>
			<h2>Pagination</h2>
			<br />

			<ul>
				{currentItems.map((item, index) => {
					return <li key={item?.id}>{item?.name}</li>;
				})}
			</ul>

			<button
				type="button"
				disabled={currentPage === 1}
				onClick={() => setCurrentPage(currentPage - 1)}
			>
				Prev
			</button>
			<button
				type="button"
				disabled={currentPage === totalPages}
				onClick={() => setCurrentPage(currentPage + 1)}
			>
				Next
			</button>
		</div>
	);
};

//page number
//current page
//page size
