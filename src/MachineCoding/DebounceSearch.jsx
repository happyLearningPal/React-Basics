import { useEffect, useState } from "react";
import { useDebounce } from "././hooks/useDebounce";

const DebounceSearch = () => {
	const [searchText, setSearchText] = useState("");
	const [users, setUsers] = useState([]);

	// Debounced Value
	const debouncedSearch = useDebounce(searchText, 500);

	// API Call
	useEffect(() => {
		if (debouncedSearch.trim().length >= 2) {
			fetch(
				`https://jsonplaceholder.typicode.com/users?name_like=${debouncedSearch}`,
			)
				.then((res) => res.json())
				.then((data) => {
					setUsers(data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			setUsers([]);
		}
	}, [debouncedSearch]);

	return (
		<div style={{ padding: "20px" }}>
			<h2>useDebounce Hook Example</h2>

			<input
				type="text"
				placeholder="Search users..."
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				style={{
					padding: "10px",
					width: "250px",
				}}
			/>

			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default DebounceSearch;
