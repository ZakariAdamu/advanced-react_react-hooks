import React from "react";
import "./App.css";
import { UserProvider, useUser } from "./components/UserContext";
import LightDarkTheme from "./components/LightDarkTheme";
import Greeting from "./components/Greeting";
import GoalsApp from "./components/GoalsApp";
import UseEffectTask1 from "./components/UseEffectTask1";
import FetchData from "./components/FetchData";
import ExpenseTracker from "./components/ExpenseTracker";
import PracticeUseRefHook from "./components/PracticeUseRefHook";
import CustomHookUser from "./components/CustomHookUser";
import ConfirmationDialog from "./components/ConfirmationDialog";
import DeleteComponent from "./components/DeleteComponent";
import LiveOrders from "./components/LiveOrders";
import SignupLoginButton from "./components/SignupLoginButton";

// this is a context api application where two components Header and Page are consuming the user.name state as needed
const LoggedInUser = () => {
	const { user } = useUser();
	return (
		<p>
			Hello <span>{user.name}</span>
		</p>
	);
};

const Header = () => {
	return (
		<header>
			<p className="sandbox-obj">--sandbox for: context api</p>
			<h2>Blog App</h2>
			<LoggedInUser />
		</header>
	);
};

const Page = () => {
	const { user } = useUser();
	return (
		<div>
			<h2>What is Lorem ipsum?</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
				blanditiis at modi corrupti eos. Magnam minima natus doloremque. Vitae
				aspernatur animi quos enim natus repudiandae perspiciatis veritatis,
				iusto quo nostrum! Fuga sed optio ex, ipsum numquam saepe inventore
				quibusdam expedita nobis consectetur. Voluptas, eius sed suscipit,
				laborum ea eligendi dolorum neque excepturi repellat placeat, soluta hic
				minima saepe corrupti perferendis.
			</p>
			<p>Written by {user.name}</p>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<Header />
			<Page />
			<LightDarkTheme />
			<Greeting />
			<GoalsApp />
			<UseEffectTask1 />
			<FetchData />
			<ExpenseTracker />
			<PracticeUseRefHook />
			<CustomHookUser />
			<ConfirmationDialog />
			<DeleteComponent />
			<LiveOrders />
			<SignupLoginButton />
		</div>
	);
}

function Root() {
	return (
		<UserProvider>
			<App />
		</UserProvider>
	);
}

export default Root;
