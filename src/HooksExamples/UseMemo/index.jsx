import React, { useState, useMemo } from "react";

export function UseMemo() {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState("");

	// Expensive calculation
	const expensiveCalculation = (num) => {
		console.log("Calculating....", num);
		for (let i = 0; i < 1000000000; i++) {} // heavy loop
		return num * 2;
	};

	const result = useMemo(() => {
		return expensiveCalculation(count);
	}, [count]);

	return (
		<div>
			<h2>Count: {count}</h2>
			<h3>Result Value: {result}</h3>

			<button onClick={() => setCount(count + 1)}>Increment</button>
			<br />

			<input
				type="text"
				placeholder="Type something..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</div>
	);
}
