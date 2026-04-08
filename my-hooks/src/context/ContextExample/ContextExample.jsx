import { useContext } from "react";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import { CountContext } from "../CountContext";

export const ContextExample = () => {
	const count = useContext(CountContext);
	return (
		<CountContext.Provider value={count}>
			<section id="next-steps">
				<Page1 />
				<Page2 />
			</section>
		</CountContext.Provider>
	);
};
