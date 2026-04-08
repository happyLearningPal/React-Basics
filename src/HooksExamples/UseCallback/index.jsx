import { useCallback, useState } from "react";
import TodoList from "./Todo";

export const UseCallback = () => {
	const [data, setData] = useState([]);
	const [count, setCount] = useState(0);

	const fnAddTodo = useCallback(() => {
		setData([...data, "New to do"]);
	}, [data]);

	return (
		<>
			<TodoList list={data} addTodo={fnAddTodo} />
			<br />
			<hr />
			Count : {count} :{" "}
			<button type="button" onClick={() => setCount(count + 1)}>
				+
			</button>
		</>
	);
};
