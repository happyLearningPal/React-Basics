import React, { memo } from "react";

const TodoList = ({ list, addTodo }) => {
	console.log("Child calling>>>>", list);
	return (
		<div>
			<h2>My Todo</h2>
			<button type="button" onClick={addTodo}>
				Add todo
			</button>
			{list?.map((todo, index) => {
				return <p key={index}>{todo}</p>;
			})}
		</div>
	);
};

export default memo(TodoList);
