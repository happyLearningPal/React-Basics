import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "./Contact";

export const NormalRouting = () => {
	return (
		<BrowserRouter>
			<nav>
				<ul className="navBar">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<hr />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
};
