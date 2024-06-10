import React from "react";

const Button = ({ type, children, ...buttonProps }) => {
	const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
	return (
		<button className={`Button ${className}`} {...buttonProps}>
			{children}
		</button>
	);
};

const LoginButton = ({ type, children, ...buttonProps }) => {
	return (
		<Button
			type="secondary"
            {...buttonProps}
			onClick={() => {
                alert("Logging in!");
                }}
		>
			{children}
		</Button>
	);
};

function SignupLoginButton() {
	return (
		<div className="SignupLoginButton">
			<header className="Header">Little Lemon Restaurant 🍕</header>
			<Button type="primary" onClick={() => alert("Signing up!")}>
				Sign up
			</Button>
			<LoginButton type="secondary" onClick={() => alert("Signing up")}>
				Login
			</LoginButton>
		</div>
	);
}

export default SignupLoginButton;

// explanation:
// type: a custom prop that determines the theme of the button based on the option provided.
// children: a prop that represents the text value that would be passed inside the button JSX and rendered to the DOM e.g Sign up.
// {...buttonProps}: represent all the attributes/properties available to the button element.
// the Button component is a custom component created with the native button element and used to create other similar components - like the LoginButton component
