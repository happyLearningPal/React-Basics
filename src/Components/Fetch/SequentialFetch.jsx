import React, { useEffect, useState } from "react";

export const SequentialFetch = () => {
	const [data, setData] = useState({
		user: null,
		orders: [],
		payments: [],
	});

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				//Sequential API call
				const userResp = await fetch(
					"https://jsonplaceholder.typicode.com/users",
				);
				const user = await userResp.json();

				const [orderResp, paymentResp] = await Promise.all([
					fetch(`https://jsonplaceholder.typicode.com/todos`),
					fetch(
						`https://jsonplaceholder.typicode.com/comments?postId=${user[0].id}`,
					),
				]);

				const orders = await orderResp.json();
				const payments = await paymentResp.json();

				setData({ user, orders, payments });
			} catch (error) {
				console.log("Error:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<h2>{data.user?.name}</h2>
			<p>Orders: {data.orders.length}</p>
			<p>Payments: {data.payments.length}</p>
		</div>
	);
};
