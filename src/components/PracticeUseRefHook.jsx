import React, { useRef } from "react";

function PracticeUseRefHook() {
	const formInputRef = useRef(null);

	const focusInput = () => {
		formInputRef.current.focus();
	};

	return (
		<>
			<hr />
			<p className="sandbox-obj">--sandbox for: useRef hook to focus an input field</p>
			<h1>Using useRef to access underlying DOM</h1>
			<input ref={formInputRef} type="text" />
			<button onClick={focusInput}>Focus input</button>
		</>
	);
}

export default PracticeUseRefHook;
