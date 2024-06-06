import React, { useEffect, useState } from "react";

function UseEffectTask1() {
	const [toggle, setToggle] = useState(false);

	const clickHandler = () => {
    setToggle(!toggle);
    // this fn when fired renders a h2 mssg within my render JSX below
	};

	useEffect(() => {
		document.title = toggle
			? "Welcome to Little Lemon"
			: "Using the useEffect hook";
	}, [toggle]);

	return (
		<div>
			<hr />
			<h1>Using the useEffect hook</h1>
			<button onClick={clickHandler}>Toggle message</button>
			{toggle && <h2>Welcome to Little Lemon</h2>}
		</div>
	);
}

export default UseEffectTask1;
