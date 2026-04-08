import React, { useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "add":
			return state + 1;

		case "sub":
			return state - 1;

		default:
			return state;
	}
};

export const UseReducer = () => {
	const [val, dispatch] = useReducer(reducer, 0);

	return (
		<div>
			<p>The value is : {val}</p>
			<button
				type="button"
				onClick={() => dispatch({ type: "add", payload: 1 })}
			>
				Add
			</button>
			<button
				type="button"
				onClick={() => dispatch({ type: "sub", payload: 1 })}
			>
				Sub
			</button>
		</div>
	);
};
