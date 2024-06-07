import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if(action.type === 'buy_ingredients') return {money: state.money - 10}
    if(action.type === 'sell_a_meal') return {money: state.money + 10}
    if(action.type === 'celebrity_visit') return {money: state.money + 5000}
}

function ExpenseTracker() {

    const initialState = { money: 100 };
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
		<div>
			<hr />
			<p className="sandbox-obj">--sandbox for: useReducer hook to handle complex state logic</p>
			<h1>Wallet: {state.money}</h1>
			<div className="wallet">
				<button onClick={() => dispatch({ type: "buy_ingredients" })}>
					Shopping for veggies!
				</button>
				<button onClick={() => dispatch({ type: "sell_a_meal" })}>
					Serve customer a meal
				</button>
				<button onClick={() => dispatch({ type: "celebrity_visit" })}>
					Celebrity visit
				</button>
			</div>
		</div>
	);
}

export default ExpenseTracker
