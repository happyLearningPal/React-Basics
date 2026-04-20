import "./App.css";
import { CreateBrowserRouter } from "./Components/CreateBrowserRouter/CreateBrowserRouter";
import { DynamicRouting } from "./Components/DynamicRouting/DynamicRouting";
import { NestedRouting } from "./Components/NestedRouting/NestedRouting";
import { NormalRouting } from "./Components/NormalRouting/NormalRouting";

function App() {
	return (
		<div>
			{/* <NormalRouting /> */}
			{/* <NestedRouting /> */}
			{/* <DynamicRouting /> */}
			<CreateBrowserRouter />
		</div>
	);
}

export default App;
