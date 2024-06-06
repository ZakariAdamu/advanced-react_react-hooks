import React, { useEffect } from "react";

// this is my custom hook file
function useConsoleLog(varName) {
	useEffect(() => {
		console.log(varName);
	}, [varName]);
	return <div></div>;
}

export default useConsoleLog;
