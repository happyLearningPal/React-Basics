import { useEffect, useRef, useState } from "react";

export function App2() {
	const [users, setUsers] = useState([]);
	const [page, setPage] = useState(1);
	const hasFetched = useRef(false);

	// Fetch API
	useEffect(() => {
		async function fetchUsers() {
			if (hasFetched.current) return;

			hasFetched.current = true;
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
			);

			const data = await response.json();

			setUsers((prev) => [...prev, ...data]);
			hasFetched.current = false;
		}

		fetchUsers();
	}, [page]);

	// Scroll Event
	useEffect(() => {
		function handleScroll() {
			const scrollTop = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;

			// User reached near bottom
			if (scrollTop + windowHeight >= documentHeight - 10) {
				setPage((prev) => prev + 1);
			}
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	console.log("users", users);

	return (
		<>
			{users.map((user) => (
				<p key={user.id}>{user.title}</p>
			))}
		</>
	);
}
