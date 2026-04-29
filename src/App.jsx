//import { useContext } from "react";
import "./App.css";
// import { CreateBrowserRouter } from "./Components/CreateBrowserRouter/CreateBrowserRouter";
// import { DynamicRouting } from "./Components/DynamicRouting/DynamicRouting";
// import { NestedRouting } from "./Components/NestedRouting/NestedRouting";
// import { NormalRouting } from "./Components/NormalRouting/NormalRouting";
// import { CountContext } from "./Context/CountContext";
// import { ContextExample } from "./Context/ContextExample";
//import { Fetch } from "./Components/Fetch/fetch";
import { SequentialFetch } from "./Components/Fetch/SequentialFetch";

function App() {
	//const [, setCount] = useContext(CountContext);
	return (
		<div>
			{/* <NormalRouting /> */}
			{/* <NestedRouting /> */}
			{/* <DynamicRouting /> */}
			{/* <CreateBrowserRouter /> */}

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

			{/* <Fetch /> */}
			<SequentialFetch />
		</div>
	);
}

export default App;
