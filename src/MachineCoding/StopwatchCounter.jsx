import React, { useEffect, useState } from "react";

export const StopwatchCounter = () => {
	const [counter, setCounter] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		if (!isRunning) return;

		const timer = setInterval(() => {
			setCounter((prev) => prev + 1);
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [isRunning]);

	const handleStart = () => {
		setIsRunning(true);
	};

	const handleStop = () => {
		setIsRunning(false);
	};

	return (
		<div>
			<h2>StopwatchCounter</h2>
			<hr />

			<p>{counter}</p>
			<br />

			<div style={{ display: "flex" }}>
				<button type="button" onClick={handleStart}>
					Start
				</button>
				<button type="button" onClick={handleStop}>
					Stop
				</button>
			</div>
		</div>
	);
};
