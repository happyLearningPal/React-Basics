import React, { memo } from "react";

const Todo = ({ list, addTodo }) => {
	console.log("child calling");
	return (
		<div>
			<button type="button" onClick={addTodo}>
				Add todo
			</button>
			<br />

			{list.map((item, index) => {
				return <p key={index}>{item}</p>;
			})}
		</div>
	);
};
export default memo(Todo);
