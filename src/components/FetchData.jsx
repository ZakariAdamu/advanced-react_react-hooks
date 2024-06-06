import React, { useEffect, useState } from "react";

function FetchData() {
	const [user, setUser] = useState([]);

	const fetchData = () => {
		fetch("https://randomuser.me/api/?results=1")
			.then((response) => response.json())
			.then((data) => setUser(data));
	};

	useEffect(() => {
		fetchData();
	}, []);

	return Object.keys(user).length > 0 ? (
    <div>
      <hr />
			<h1>Data returned from fetch API</h1>
			<h2>First Name: {user.results[0].name.first}</h2>
			<h2>Last Name: {user.results[0].name.last}</h2>
		</div>
	) : (
		<h2>Data pending...</h2>
	);
}

export default FetchData;
