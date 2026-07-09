import React, { useContext } from "react";
import { CountContext } from "../CountContext";

export default function Page1() {
	const { count } = useContext(CountContext);

	return <div>Child Component - Page1: Count val is : {count}</div>;
}
