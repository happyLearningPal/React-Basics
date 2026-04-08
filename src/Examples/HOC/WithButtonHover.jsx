import withHOC from ".";

function WithButtonHover({ count, handleIncrement }) {
	return (
		<button type="button" onMouseOver={handleIncrement}>
			{count}
		</button>
	);
}

export default withHOC(WithButtonHover);
