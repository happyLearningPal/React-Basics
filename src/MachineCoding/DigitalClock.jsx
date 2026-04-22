import React, { useEffect, useState } from "react";

export const DigitalClock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
			<h3>Time is : {time.toLocaleTimeString()}</h3>
		</div>
	);
};
