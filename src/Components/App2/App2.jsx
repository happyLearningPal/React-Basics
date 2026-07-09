import React, { useCallback, useState } from "react";
import Todo from "./Todo";

const App2 = () => {
	const [data, setData] = useState([]);
	const [count, setCount] = useState(0);

	const handleClick = useCallback(() => {
		setData([...data, "to do"]);
	}, [data]);

	return (
		<div>
			<p>Hello</p>
			<hr />
			Count : {count} :{" "}
			<button type="button" onClick={() => setCount(count + 1)}>
				+
			</button>
			<hr />
			<Todo list={data} addTodo={handleClick} />
		</div>
	);
};

export default App2;
