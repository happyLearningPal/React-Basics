import React, { useRef, useState } from "react";

export const Timer = () => {
	const [count, setCount] = useState("");
	const timerRef = useRef(null);

	const stopTimer = () => {
		clearInterval(timerRef.current);
		timerRef.current = null;
	};

	const startTimer = () => {
		timerRef.current = setInterval(() => {
			setCount((prev) => prev + 1);
		}, 1000);
	};

	return (
		<div>
			<h4>Timer : {count}</h4>
			<button type="button" onClick={startTimer}>
				Start
			</button>
			<br />
			<button type="button" onClick={stopTimer}>
				Stop
			</button>
		</div>
	);
};
