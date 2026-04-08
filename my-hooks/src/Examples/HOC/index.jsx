import { useState } from "react";

const withHOC = (OriginalComponent) => {
	const NewComponent = () => {
		const [count, setCount] = useState(0);

		const handleIncrement = () => {
			setCount((prevCount) => prevCount + 1);
		};

		return (
			<OriginalComponent count={count} handleIncrement={handleIncrement} />
		);
	};
	return NewComponent;
};

export default withHOC;
