import { useEffect, useState } from "react";

function Dark() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<div>
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme
			</button>

			<p>Hello World</p>
		</div>
	);
}

export default Dark;
