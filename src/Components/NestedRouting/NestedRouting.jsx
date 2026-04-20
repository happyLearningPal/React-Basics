import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../About";

const Layout = () => {
	return (
		<div>
			<nav>
				<ul className="navBar">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
				</ul>
			</nav>
			<hr />

			<Outlet />
		</div>
	);
};

function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
			<Link to="profile">Profile</Link>
			<br />
			<Link to="settings">Settings</Link>

			<Outlet />
		</div>
	);
}

function Profile() {
	return <h3>Profile Page</h3>;
}

function Settings() {
	return <h3>Settings Page</h3>;
}

export const NestedRouting = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />

					<Route path="dashboard" element={<Dashboard />}>
						<Route path="profile" element={<Profile />} />
						<Route path="settings" element={<Settings />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
