import "./App.css";
import { UseMemo } from "./HooksExamples/UseMemo";

function App() {
	return (
		<div className="parent">
			<h3>Hello! Welcome to Hooks!</h3>

			{/*Uncomment for UseMemo example*/}
			<UseMemo />

			{/*Uncomment for UseCallback example*/}
			{/* <UseCallback /> */}

			{/*Uncomment for UseRef/UseLayoutEffect example*/}
			{/* <UseRef /> */}
			{/* <UseLayoutEffect /> */}

			{/*Uncomment for UseReducer examples*/}
			{/* <UseReducer /> */}
		</div>
	);
}

export default App;
