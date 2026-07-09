import withAuthorization from "./withAuthorization";

function Dashboard() {
	return <h2>Welcome Admin</h2>;
}

export default withAuthorization(Dashboard);
