import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CountProvider from "./Context/CountProvider.jsx";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CountProvider>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</CountProvider>
	</StrictMode>,
);
