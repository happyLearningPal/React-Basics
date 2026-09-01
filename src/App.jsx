import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/todoSlice";

const App = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todo);

	const handleAddTodo = () => {
		if (text) {
			dispatch(addTodo(text));
			setText("");
		}
	};

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	console.log(todos);

	return (
		<div>
			<h1>Redux toolkit example</h1>
			<br />

			<input
				type="text"
				placeholder="Enter todo"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleAddTodo}>Add todo</button>

			<ul>
				{todos.map((item) => {
					return (
						<div
							key={item.id}
							style={{ display: "flex", justifyContent: "center" }}
						>
							<li>{item.text}</li>
							<button type="button" onClick={() => handleDelete(item.id)}>
								Remove
							</button>
						</div>
					);
				})}
			</ul>
		</div>
	);
};
export default App;
