import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todo",
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			state.push({ id: Date.now(), text: action.payload });
		},
		deleteTodo: (state, action) => {
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
