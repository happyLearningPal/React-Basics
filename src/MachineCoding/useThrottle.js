import { useRef } from "react";

export default function useThrottle(callback, delay) {
	let lastExecuted = 0;

	return (...args) => {
		const now = Date.now();

		if (now - lastExecuted >= delay) {
			callback(...args);
			lastExecuted = now;
		}
	};
}
