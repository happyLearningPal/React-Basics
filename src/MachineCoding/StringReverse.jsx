import React from "react";

export const StringReverse = () => {
	const str = "Hello";

	const fnStrReverse = () => {
		const arr = str.split("");
		return arr.reverse().join("");
	};

	const fnStringReverse2 = () => {
		let newStr = " ";
		for (let i = str.length - 1; i >= 0; i--) {
			newStr += str[i];
		}
		return newStr;
	};

	const fnStrRevUsingReduce = () => {
		const result = str.split("").reduce((acc, curr) => {
			return curr + acc;
		}, "");
		return result;
	};

	const fnForOf = () => {
		let newStr = "";
		for (let char of str) {
			newStr = char + newStr;
		}
		return newStr;
	};

	return (
		<>
			<h2>StringReverse</h2>
			<h3>String is : {str}</h3>
			<h4>Method 1 : {fnStrReverse()}</h4>
			<h4>Method 2 : {fnStringReverse2()}</h4>
			<h4>Method 3 : {fnStrRevUsingReduce()}</h4>
			<h4>Method 4 : {fnForOf()}</h4>
			<br />
		</>
	);
};
