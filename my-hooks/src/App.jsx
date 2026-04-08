import { useContext } from "react";
import "./App.css";
import { ContextExample } from "./context/ContextExample/ContextExample";
import { UseMemo } from "./HooksExamples/UseMemo";
import { UseCallback } from "./HooksExamples/UseCallback";
import UseRef from "./HooksExamples/UseRef";
import { CountContext } from "./context/CountContext";
import { Timer } from "./Examples/Timer";
import { UseLayoutEffect } from "./HooksExamples/UseLayoutEffect";
import { Debounce } from "./Examples/Debounce/Debounce";
import { Throttle } from "./Examples/Throttle";
import InfiniteScroll from "./Examples/Infinite Scroll/InfiniteScroll";
import { UseReducer } from "./HooksExamples/UseReducer";
import WithButtonClick from "./Examples/HOC/WithButtonClick";
import WithButtonHover from "./Examples/HOC/WithButtonHover";

function App() {
	const [count, setCount] = useContext(CountContext);

	return (
		<div className="parent">
			{/*Uncomment for Context example*/}
			{/* <section id="center">
				<h1>Get started : Parent Component</h1>
			</section>
			<section>
				<button
					className="counter"
					onClick={() => setCount((count) => count + 1)}
				>
					{" "}
					Click to increse count
				</button>
			</section>
			<ContextExample /> */}

			{/*Uncomment for UseMemo example*/}
			{/* <UseMemo /> */}

			{/*Uncomment for UseCallback example*/}
			{/* <UseCallback /> */}

			{/*Uncomment for UseRef/UseLayoutEffect example*/}
			{/* <UseRef /> */}
			{/* <UseLayoutEffect /> */}

			{/*Uncomment for Timer examples*/}
			{/* <Timer /> */}

			{/*Uncomment for Debounce or Throttle examples*/}
			{/* <Debounce /> */}
			{/* <Throttle /> */}

			{/*Uncomment for InfiniteScroll examples*/}
			{/* <InfiniteScroll /> */}

			{/*Uncomment for UseReducer examples*/}
			{/* <UseReducer /> */}

			{/*Uncomment for HOC examples*/}
			<WithButtonClick />
			<WithButtonHover />
		</div>
	);
}

export default App;
