import React, { useState } from "react";
import "../App.css";

export default function ProgressBar() {
	const [progress, setProgress] = useState(0);

	return (
		<div className="container">
			<h2>Progress Bar</h2>

			<div className="progress-container">
				<div className="progress" style={{ width: `${progress}%` }}>
					{progress}%
				</div>
			</div>

			<br />

			<button onClick={() => setProgress((prev) => Math.max(prev - 10, 0))}>
				-
			</button>

			<button onClick={() => setProgress((prev) => Math.min(prev + 10, 100))}>
				+
			</button>
		</div>
	);
}
