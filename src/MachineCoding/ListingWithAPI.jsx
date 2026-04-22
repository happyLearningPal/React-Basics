import React from "react";
import { useFetch } from "./useFetch";

export const ListingWithAPI = () => {
	const { data, loading } = useFetch();

	return (
		<div>
			<h2>ListingWithAPI</h2>
			{loading && <p>Loading.....</p>}
			<ul>
				{data?.map((item) => {
					return <li key={item.id}>{item.title}</li>;
				})}
			</ul>
		</div>
	);
};
