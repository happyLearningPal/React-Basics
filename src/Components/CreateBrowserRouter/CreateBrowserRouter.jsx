import React from "react";
import {
	createBrowserRouter,
	Link,
	Outlet,
	RouterProvider,
	useLoaderData,
	useRouteError,
} from "react-router-dom";
import Home from "../Home";
import About from "../About";

function RootLayout() {
	return (
		<div>
			<h1>My App</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/users">Users</Link>
			</nav>
			<hr />
			<Outlet />
		</div>
	);
}

function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
			<Outlet />
		</div>
	);
}

function Profile() {
	return <h3>Profile</h3>;
}

async function usersLoader() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	if (!res.ok) {
		throw new Error("Failed to fetch users");
	}
	return res.json();
}

function Users() {
	const users = useLoaderData();

	return (
		<div>
			<h1>Users</h1>
			{users.map((user) => (
				<p key={user.id}>{user.name}</p>
			))}
		</div>
	);
}

function UsersError() {
	const error = useRouteError();
	return <h2>Something went wrong: {error.message}</h2>;
}

export const CreateBrowserRouter = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			Component: RootLayout,
			children: [
				{
					index: true,
					Component: Home,
				},
				{
					path: "/about",
					Component: About,
				},
				{
					path: "/dashboard",
					Component: Dashboard,
					children: [
						{
							path: "profile",
							Component: Profile,
						},
					],
				},
				{
					path: "/users",
					Component: Users,
					loader: usersLoader,
					errorElement: <UsersError />,
				},
			],
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};
