import React from "react";

function Dialog({ children }) {
	return (
		<div className="modal">
			<hr />
			<p className="sandbox-obj">
				--sandbox for: working with special children props
			</p>
			{children}
		</div>
	);
}

function ConfirmationDialog() {
	return (
		<Dialog color="blue">
			<h1 className="Dialog-title">Thanks!</h1>
			<p className="Dialog-message">
				We'll process your order in less than 24 hours.
				
			</p>
		</Dialog>
	);
}

export default ConfirmationDialog;
