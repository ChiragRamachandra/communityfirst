import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			loading ? <h2> Loading... </h2> : isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />}
	/>
);

export default PrivateRoute;
