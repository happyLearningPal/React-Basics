import React, { useEffect, useState } from "react";
import List from "./List";
import { useDebounce } from "./hooks/useDebounce";

export const Debounce = () => {
	const [searchVal, setSearchVal] = useState("");
	const debouncedValue = useDebounce(searchVal, 1000);

	useEffect(() => {
		if (debouncedValue) {
			console.log("API call:", debouncedValue);
		}
	}, [debouncedValue]);

	return (
		<div>
			<input
				type="text"
				value={searchVal}
				onChange={(e) => setSearchVal(e.target.value)}
				placeholder="Search...."
			/>
		</div>
	);
};
