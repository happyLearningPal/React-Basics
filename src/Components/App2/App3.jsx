import React, { useMemo, useState } from "react";

export const App3 = () => {
	const [count, setCount] = useState(1);
	const [str, setStr] = useState("");

	function expensiveCalculation(num) {
		console.log("Calculating....");
		for (let i = 0; i < 100000; i++) {}
		return num * num;
	}

	const square = useMemo(() => {
		return expensiveCalculation(count);
	}, [count]);

	return (
		<div>
			<h2>Use memo example</h2>
			<br />

			<p>Count : {count} </p>
			<p>Square : {square}</p>

			<button type="button" onClick={() => setCount(count + 1)}>
				Increment
			</button>
			<br />

			<input
				type="text"
				placeholder="Enter string"
				value={str}
				onChange={(e) => setStr(e.target.value)}
			/>
		</div>
	);
};
