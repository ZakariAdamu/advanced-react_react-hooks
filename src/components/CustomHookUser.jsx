import React, { useState } from "react";
import useConsoleLog from "./useConsoleLog";

function CustomHookUser() {
	const [count, setCount] = useState(0);
	// using a custom hook to log the count variable to the console
	useConsoleLog(count);

	function increment() {
		setCount((prevCount) => prevCount + 1);
	}
	return (
		<div>
			<hr />
			<h1>Count: {count}</h1>
			<button onClick={increment}>Plus 1</button> <br />
			<sm>check your console...</sm>
		</div>
	);
}

export default CustomHookUser;
