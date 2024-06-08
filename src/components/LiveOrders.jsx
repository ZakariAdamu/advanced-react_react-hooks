import React from "react";

const Row = ({ children, spacing }) => {
	const childStyle = {
		marginLeft: `${spacing}px`,
	};
	return (
		<div>
			<div>
				<hr />
				<p className="sandbox-obj">
					--sandbox for: manipulate children dynamically with
					React.cloneElementAPI and React.ChildrenAPI
				</p>
			</div>
			<div className="Row-Orders">
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child, {
						style: {
							...child.props.style,
							...(index > 0 ? childStyle : {}),
						},
					});
				})}
			</div>
		</div>
	);
};

function LiveOrders() {
	return (
		<div>
			<Row spacing={32}>
				<p>Pizza Margarita</p>
				<p>2</p>
				<p>$30</p>
				<p>18:43</p>
				<p>Mary</p>
			</Row>
		</div>
	);
}

export default LiveOrders;
