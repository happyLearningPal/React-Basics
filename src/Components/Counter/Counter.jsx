// import { useStore } from "../../state/store";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/counterSlice";

// export default function Counter() {
// 	const { count, increment } = useStore();
// 	return (
// 		<div>
// 			<span>{count}</span>
// 			<button onClick={increment}>one up</button>
// 		</div>
// 	);
// }

const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<h2>{count}</h2>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
		</>
	);
};

export default Counter;
