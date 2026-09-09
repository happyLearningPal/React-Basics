import { useEffect, useState } from "react";

function InfiniteScroll1() {
	const [users, setUsers] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const fetchUsers = async () => {
		setLoading(true);

		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`,
		);

		const data = await response.json();

		setUsers((prev) => [...prev, ...data]);
		setLoading(false);
	};

	useEffect(() => {
		fetchUsers();
	}, [page]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.innerHeight + window.scrollY;

			const pageHeight = document.documentElement.scrollHeight;

			if (scrollPosition >= pageHeight - 100 && !loading) {
				setPage((prev) => prev + 1);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [loading]);

	return (
		<div>
			<h1>Users</h1>

			{users.map((user) => (
				<div key={user.id}>
					<h3>{user.name}</h3>
					<p>{user.email}</p>
				</div>
			))}

			{loading && <p>Loading...</p>}
		</div>
	);
}

export default InfiniteScroll1;
