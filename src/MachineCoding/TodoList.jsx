import React, { useState } from "react";

export const TodoList = () => {
	const [list, setList] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleAdd = () => {
		console.log([...list, { value: inputValue, completed: false }]);
		setList([...list, { value: inputValue, completed: false }]);
		setInputValue("");
	};

	const handleInput = (e) => {
		setInputValue(e.target.value);
	};

	const handleDelete = (index) => {
		const newTodos = [...list];
		newTodos.splice(index, 1);
		setList(newTodos);
	};

	const handleCheckbox = (c_index) => {
		console.log("-------", c_index);
		const updatedArr = list.map((item, index) => {
			if (c_index === index) return { ...item, completed: !item.completed };
			else return item;
		});
		console.log(updatedArr);
		setList(updatedArr);
	};

	return (
		<div>
			<h1>Todo List</h1>
			<br />

			<input
				type="text"
				value={inputValue}
				placeholder="Add to do"
				onChange={handleInput}
			/>
			<button type="button" onClick={handleAdd}>
				Add Todo
			</button>
			<br />

			<ul
				style={{
					width: "50px",
					listStyleType: "none",
					margin: "0 auto",
					marginTop: "20px",
				}}
			>
				{list.map((item, index) => {
					return (
						<div
							key={index}
							style={{
								display: "flex",
								justifyContent: "center",
								marginTop: "10px",
							}}
						>
							<input
								checked={item.completed}
								type="checkbox"
								onChange={() => handleCheckbox(index)}
							></input>
							<li
								style={{
									display: "flex",
									justifyContent: "center",
									textDecoration: item.completed ? "line-through" : "none",
									color: item.completed ? "gray" : "white",
								}}
							>
								{item?.value}{" "}
								<button
									style={{ paddingLeft: "5px" }}
									onClick={() => handleDelete(index)}
								>
									Delete
								</button>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};
