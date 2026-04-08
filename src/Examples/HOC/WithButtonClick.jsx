import withHOC from ".";

function WithButtonClick({ count, handleIncrement }) {
	return (
		<button type="button" onClick={handleIncrement}>
			{count}
		</button>
	);
}

export default withHOC(WithButtonClick);
