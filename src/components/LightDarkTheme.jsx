import React, { useState } from "react";

const themes = {
	light: {
		backgroundColor: "#fff",
		color: "#213547",
	},
	dark: {
		backgroundColor: "#000",
		color: "#fff",
	},
};
function LightDarkTheme() {
	const [theme, setTheme] = useState(themes.light);

	const toggleTheme = () => {
		setTheme(theme === themes.light ? themes.dark : themes.light);
	};
	return (
		<div style={theme}>
			<hr />
			<p className="sandbox-obj">--sandbox for: useState hook</p>

			<h1>This is a heading</h1>
			<p>This is some text content...</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
				laudantium sunt fuga perspiciatis repellendus quae mollitia beatae
				nostrum! Iusto assumenda reiciendis delectus error. Ratione quidem
				dolorum architecto voluptatum, cum repudiandae? Maiores libero obcaecati
				illo deleniti. Tempore ipsam porro excepturi vero quidem totam beatae
				laudantium voluptate! Laboriosam in velit natus ipsum blanditiis saepe
				repudiandae, mollitia eveniet deleniti excepturi. Consequuntur,
				accusantium aut? Ipsum quos id officiis laborum nulla dignissimos
				quibusdam deserunt voluptate sed iure ipsa, esse mollitia alias minima
				dolor animi modi vero. Magnam repellat excepturi aliquid nostrum
				assumenda officiis voluptatum pariatur?
			</p>
			<button onClick={toggleTheme}>Toggle theme</button>
		</div>
	);
}

export default LightDarkTheme;
