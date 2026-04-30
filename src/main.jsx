import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CountProvider from "./Context/CountProvider.jsx";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CountProvider>
			<RecoilRoot>
				<Provider store={store}>
					<App />
				</Provider>
			</RecoilRoot>
		</CountProvider>
	</StrictMode>,
);
