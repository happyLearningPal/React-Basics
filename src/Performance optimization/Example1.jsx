import React, { useMemo, useState } from "react";
import { ExpensiveChild } from "./ExpensiveChild";

const Example1 = () => {
	const [count, setCount] = useState(0);

	const data = useMemo(() => {
		return { name: "Pallavi" };
	}, []);

	return (
		<>
			<button onClick={() => setCount(count + 1)}>{count}</button>

			<ExpensiveChild data={data} />
		</>
	);
};

export default Example1;
