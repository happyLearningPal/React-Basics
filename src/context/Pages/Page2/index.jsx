import React, { useContext } from "react";
import { CountContext } from "../../CountContext";

export default function Page2() {
	const count = useContext(CountContext);
	return <div>Child Component - Page2: Count val is : {count}</div>;
}
