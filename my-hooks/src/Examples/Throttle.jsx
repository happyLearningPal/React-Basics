import React, { useEffect, useState } from "react";

export const Throttle = () => {
	const [scrollY, setScrollY] = useState(0);

	const throttle = (fn, delay) => {
		let waiting = false;

		return function (...args) {
			if (!waiting) {
				fn(...args);
				waiting = true;

				setTimeout(() => {
					waiting = false;
				}, delay);
			}
		};
	};

	useEffect(() => {
		const handleScroll = throttle(() => {
			setScrollY(window.scrollY);
		}, 500);

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return <div style={{ height: "2000px" }}>Scroll : {scrollY}</div>;
};
