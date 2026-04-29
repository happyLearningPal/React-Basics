import { useStore } from "../../state/store";

export default function Counter() {
	const { count, increment } = useStore();
	return (
		<div>
			<span>{count}</span>
			<button onClick={increment}>one up</button>
		</div>
	);
}
