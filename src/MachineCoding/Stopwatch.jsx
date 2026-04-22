import React, { useEffect, useRef, useState } from "react";

export const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [isRunning, setIsrunning] = useState(false);

	const intervalRef = useRef();

	useEffect(() => {
		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);

	const handleStart = () => {
		if (!isRunning) {
			setIsrunning(true);
			//For seconds : 1 sec = 1000 ms
			// intervalRef.current = setInterval(() => {
			// 	setTime((prev) => prev + 1);
			// }, 1000);

			//For miliseconds implementation
			intervalRef.current = setInterval(() => {
				setTime((prev) => prev + 10);
			}, 10);
		}
	};

	const handlePause = () => {
		setIsrunning(false);
		clearInterval(intervalRef.current);
	};

	const handleReset = () => {
		setIsrunning(false);
		setTime(0);
		clearInterval(intervalRef.current);
	};

	const formatTime = (seconds) => {
		const hrs = Math.floor(seconds / 3600); //1hr = 3600 seconds
		const minute = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;

		return `${String(hrs).padStart(2, "0")}.${String(minute).padStart(2, "0")}.${String(remainingSeconds).padStart(2, "0")}`;
	};

	//for miliseconds
	const formatMSTime = (ms) => {
		const hrs = Math.floor(ms / 3600000);
		const mins = Math.floor((ms % 3600000) / 60000);
		const secs = Math.floor((ms % 60000) / 1000);
		const millis = Math.floor((ms % 1000) / 10); // 2-digit ms

		return `${String(hrs).padStart(2, "0")}.${String(mins).padStart(
			2,
			"0",
		)}.${String(secs).padStart(2, "0")}.${String(millis).padStart(2, "0")}`;
	};

	return (
		<div>
			<h2>Stopwatch</h2>
			<br />
			<h3>{formatMSTime(time)}</h3>
			<div className="btnStyle">
				<button type="button" onClick={handleStart}>
					Start
				</button>
				<button type="button" onClick={handlePause}>
					Pause
				</button>
				<button type="button" onClick={handleReset}>
					Reset
				</button>
			</div>
		</div>
	);
};
