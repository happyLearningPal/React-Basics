import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const InfiniteScroll = () => {
	const [list, setList] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		setLoading(true);
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
		);
		const data = await res.json();
		setList((prev) => [...prev, ...data]);
		setLoading(false);
	};

	useEffect(() => {
		if (loading) return;
		getData();
	}, [page]);

	const handleScroll = () => {
		const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

		if (!loading && scrollTop + clientHeight >= scrollHeight - 5) {
			setPage((prev) => prev + 1);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [loading]);

	return (
		<div>
			<h2>Infinite scroll</h2>
			{list.map((item, index) => (
				<div
					key={`${item.id}-${index}`}
					style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
				>
					{item.title} {item.id}
				</div>
			))}
			{loading && <p>Loading...</p>}
		</div>
	);
};

export default InfiniteScroll;
