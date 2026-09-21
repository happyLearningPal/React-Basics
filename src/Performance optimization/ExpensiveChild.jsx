import React from "react";

export const ExpensiveChild = React.memo(({ data }) => {
	console.log("ExpensiveChild rendered");

	let result = 0;

	for (let i = 0; i < 100000000; i++) {
		result += i;
	}

	return (
		<div>
			<h2>ExpensiveChild - </h2>
			<p>{data?.name}</p>
			<p>{result}</p>
		</div>
	);
});
