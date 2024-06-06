import { useState } from "react";

export default function Greeting() {
	const [greeting, setGreeting] = useState({
		greet: "Hello",
		place: "World",
	});
	console.log(greeting, setGreeting);

	function updateGreeting() {
		if (greeting.place === "World") {
			setGreeting((prevState) => {
				return { ...prevState, place: "World-Wide Web" };
			});
		} else {
			setGreeting((prevState) => {
				return { ...prevState, place: "World" };
			});
		}
	}

	return (
		<div>
			<hr />
			<h1>
				{greeting.greet}, {greeting.place}
			</h1>
			<button onClick={updateGreeting}>Update greeting</button>
		</div>
	);
}
