import { useState } from "react";
import { CountContext } from "./CountContext";

export default function CountProvider({ children }) {
	const [count, setCount] = useState(0);

	return (
		<CountContext.Provider value={{ count, setCount }}>
			{children}
		</CountContext.Provider>
	);
}
