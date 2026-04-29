//import { useContext } from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
// import { CreateBrowserRouter } from "./Components/CreateBrowserRouter/CreateBrowserRouter";
// import { DynamicRouting } from "./Components/DynamicRouting/DynamicRouting";
// import { NestedRouting } from "./Components/NestedRouting/NestedRouting";
// import { NormalRouting } from "./Components/NormalRouting/NormalRouting";
// import { CountContext } from "./Context/CountContext";
// import { ContextExample } from "./Context/ContextExample";
//import { Fetch } from "./Components/Fetch/fetch";
//import { SequentialFetch } from "./Components/Fetch/SequentialFetch";
// import { loggedInUserState, updatedUserNameState } from "./recoil/atom";
// import Counter from "./Components/Counter/Counter";

function App() {
	//const [, setCount] = useContext(CountContext);
	// const loggedInUserStateVal = useRecoilValue(loggedInUserState);
	// const updatedUserName = useRecoilValue(updatedUserNameState);

	//console.log("loggedInUserState>>>>>>", loggedInUserStateVal, updatedUserName);

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
			{/* <SequentialFetch /> */}

			<Counter />
		</div>
	);
}

export default App;
