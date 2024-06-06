import React, { useState } from "react";

// ======= GoalForm component starts here =========
// this component captures a new goal using a form
function GoalForm({ onAdd }) {
	const [formData, setFormData] = useState({ goal: "", by: "" });

	function changeHandler(event) {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	}

	function submitHandler(event) {
		event.preventDefault();
		onAdd(formData); // Pass the entire formData object to the parent
		setFormData({ goal: "", by: "" }); // Clear form after submission
	}

	return (
		<div>
			<hr />
			<h1>My Little Lemon Goals</h1>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					name="goal"
					placeholder="Goal"
					value={formData.goal}
					onChange={changeHandler}
				/>
				<input
					type="text"
					name="by"
					placeholder="By"
					value={formData.by}
					onChange={changeHandler}
				/>
				<button type="submit">Submit Goal</button>
			</form>
		</div>
	);
}

// ======= End of GoalForm component =========

// ======= ListOfGoals component starts here =========
function ListOfGoals({ allGoals }) {
	return (
		<ul>
			{allGoals.map((goal) => (
				<li key={goal.goal}>
					<span>
						My goal is to {goal.goal}, by {goal.by}
					</span>
				</li>
			))}
		</ul>
	);
}

function GoalsApp() {
	const [allGoals, updateAllGoals] = useState([]); // Initialize with empty array
	// ======= End of ListOfGoals component =========

	// ======= GoalsApp is the parent component =======
	function addGoal(newGoal) {
		updateAllGoals([...allGoals, newGoal]); // Use spread syntax for immutability
	}

	return (
		<div className="App">
			<GoalForm onAdd={addGoal} />
			<ListOfGoals allGoals={allGoals} />
		</div>
	);
}

export default GoalsApp;



