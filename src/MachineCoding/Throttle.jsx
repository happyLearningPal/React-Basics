import React, { useEffect } from "react";
import useThrottle from "./hooks/useThrottle";

export default function Throttle() {
	const handleScroll = useThrottle(() => {
		console.log(window.scrollY);
	}, 3000);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<div style={{ height: "3000px", backgroundColor: "lightblue" }}>
			Scroll the page...
		</div>
	);
}
