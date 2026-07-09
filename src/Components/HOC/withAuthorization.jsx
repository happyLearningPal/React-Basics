import { Navigate } from "react-router-dom";

const withAuthorization = (WrappedComponent) => {
	return function EnhancedComponent(props) {
		const role = "User";

		if (role !== "Admin") {
			return <Navigate to="/login" />;
		}

		return <WrappedComponent {...props} />;
	};
};

export default withAuthorization;
