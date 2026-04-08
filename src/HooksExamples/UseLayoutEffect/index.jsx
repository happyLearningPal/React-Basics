import React, { useEffect, useLayoutEffect, useRef } from "react";

export const UseLayoutEffect = () => {
	const ref = useRef();

	useEffect(() => {
		ref.current.style.width = "200px";
	}, []);

	useLayoutEffect(() => {
		ref.current.style.width = "300px";
	}, []);

	return (
		<div
			ref={ref}
			style={{
				width: "50px",
				height: "50px",
				background: "tomato",
				transition: "all 0.2s",
			}}
		>
			Box
		</div>
	);
};
