import React, { useState } from "react";

export const CounterExample = () => {
	const [count, setCount] = useState(0);

	const handleCounter = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div>
			<h2>CounterExample</h2>
			<p>Count is : {count} </p>
			<button onClick={handleCounter}>Count++</button>
		</div>
	);
};
