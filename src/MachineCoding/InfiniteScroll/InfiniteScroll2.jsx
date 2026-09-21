import { useEffect, useRef, useState } from "react";

function InfiniteScroll2() {
	const [users, setUsers] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	const loaderRef = useRef(null);
	const loadingRef = useRef(false);

	// -----------------------------
	// 1. Fetch users
	// -----------------------------
	useEffect(() => {
		const fetchUsers = async () => {
			//setting loading true
			loadingRef.current = true;
			setLoading(true);

			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`,
				);

				const data = await response.json();

				console.log("Page:", page);
				console.log("Data:", data);

				if (data.length === 0) {
					setHasMore(false);
					return;
				}

				setUsers((prev) => [...prev, ...data]);
			} catch (error) {
				console.log("Error:", error);
			} finally {
				//setting loading false
				loadingRef.current = false;
				setLoading(false);
			}
		};

		fetchUsers();
	}, [page]);

	// -----------------------------
	// 2. Intersection Observer
	// -----------------------------
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];

				if (entry.isIntersecting && !loadingRef.current && hasMore) {
					setPage((prev) => prev + 1);
				}
			},
			{
				root: null,
				rootMargin: "100px",
				threshold: 0,
			},
		);

		if (loaderRef.current) {
			observer.observe(loaderRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [hasMore]);

	return (
		<div style={{ padding: "20px" }}>
			<h1>Users</h1>

			{users.map((user) => (
				<div
					key={user.id}
					style={{
						border: "1px solid #ccc",
						padding: "15px",
						marginBottom: "10px",
					}}
				>
					<h3>{user.name}</h3>
					<p>{user.email}</p>
				</div>
			))}

			{/* Sentinel */}
			<div
				ref={loaderRef}
				style={{
					padding: "30px",
					textAlign: "center",
				}}
			>
				{loading && <p>Loading...</p>}

				{!hasMore && <p>No more users</p>}
			</div>
		</div>
	);
}

export default InfiniteScroll2;
