import React from "react";

export const HOC = () => {
	const role = "User";
	return (
		<div>
			<h2>HOC</h2>

			<p>Welcome to dashboard!</p>
			<br />

			<p>Your role is {role}</p>
		</div>
	);
};
