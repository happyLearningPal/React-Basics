import React, { useEffect, useMemo, useState } from "react";

const PaginationWithSearch = () => {
	const [users, setUsers] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 3;

	// Fetch API Data
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.catch((err) => console.log(err));
	}, []);

	// Search Filter
	const filteredUsers = useMemo(() => {
		if (searchText.trim().length < 2) {
			return users;
		}

		return users.filter((user) =>
			user.name.toLowerCase().includes(searchText.toLowerCase()),
		);
	}, [users, searchText]);

	// Pagination Logic
	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const currentUsers = filteredUsers.slice(startIndex, endIndex);

	// Handle Search
	const handleSearch = (e) => {
		setSearchText(e.target.value);
		setCurrentPage(1);
	};

	return (
		<div style={{ padding: "20px" }}>
			<h2>User List</h2>

			{/* Search Input */}
			<input
				type="text"
				placeholder="Search by name..."
				value={searchText}
				onChange={handleSearch}
				style={{
					padding: "8px",
					marginBottom: "20px",
					width: "250px",
				}}
			/>

			{/* Items Per Page */}
			<p>
				<strong>Items Per Page:</strong> {itemsPerPage}
			</p>

			{/* Table */}
			<table border="1" cellPadding="10" cellSpacing="0" width="100%">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>City</th>
					</tr>
				</thead>

				<tbody>
					{currentUsers.length > 0 ? (
						currentUsers.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.address.city}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="4" align="center">
								No Users Found
							</td>
						</tr>
					)}
				</tbody>
			</table>

			{/* Pagination Buttons */}
			<div style={{ marginTop: "20px" }}>
				<button
					disabled={currentPage === 1}
					onClick={() => setCurrentPage((prev) => prev - 1)}
				>
					Previous
				</button>

				<span style={{ margin: "0 10px" }}>
					Page {currentPage} of {totalPages}
				</span>

				<button
					disabled={currentPage === totalPages || totalPages === 0}
					onClick={() => setCurrentPage((prev) => prev + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default PaginationWithSearch;
