import React, { Fragment, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../utils/Firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
	googleProvider: new firebase.auth.GoogleAuthProvider()
};

const BeforeLoginHome = lazy(() => import('../pages/BeforeLoginHome'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const AboutUs = lazy(() => import('../pages/AboutUs'));

// import Zoom from '../pages/zoom/ZoomComponent';

const Routes = (props) => {
	const { user, signOut, signInWithGoogle } = props;
	let firebaseFunc = {
		user,
		signOut,
		signInWithGoogle
	};

	console.log(firebaseFunc);
	return (
		<Fragment>
			{/* {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
			{user ? (
				<button onClick={signOut}>Sign out</button>
			) : (
				<button onClick={signInWithGoogle}>Sign in with Google</button>
			)} */}
			<Suspense fallback={<div>Loading...</div>}>
				<Switch onUpdate={() => window.scrollTo(0, 0)}>
					<Route
						exact
						path="/"
						render={(props) => <BeforeLoginHome {...props} firebaseFunc={firebaseFunc} />}
					/>
					<Route exact path="/login" render={(props) => <Login {...props} firebaseFunc={firebaseFunc} />} />
					<Route
						exact
						path="/register"
						render={(props) => <Register {...props} firebaseFunc={firebaseFunc} />}
					/>
					<Route
						exact
						path="/dashboard"
						render={(props) => <Dashboard {...props} firebaseFunc={firebaseFunc} />}
					/>
					<Route
						exact
						path="/about-us"
						render={(props) => <AboutUs {...props} firebaseFunc={firebaseFunc} />}
					/>

					<PrivateRoute exact path="/categories" component={BeforeLoginHome} />

					<Route path="*" component={BeforeLoginHome} />
				</Switch>
			</Suspense>
		</Fragment>
	);
};

export default withFirebaseAuth({
	providers,
	firebaseAppAuth
})(Routes);
