import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);
// the purpose of this context api is to provide the user 'Zakari' to other components who needs the data
export const UserProvider = ({ children }) => {
	const [user] = useState({
		name: "Zakari",
		eamil: "zakaadamu@email.com",
		dob: "14/07/1993",
	});
	return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};



// now create a custom hook "useUser" to export the UserContext with it
export const useUser = () => useContext(UserContext);
