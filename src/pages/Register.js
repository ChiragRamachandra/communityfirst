import React, { Fragment, useState } from 'react';
import { Jumbotron, Button, Form } from 'react-bootstrap';

import Header from '../components/Header';
import * as firebase from 'firebase/app';

const Login = ({ firebaseFunc }) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});
	const { email, password } = formData;

	console.log(firebaseFunc);

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		console.log('onchange');
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('submit pressed');
		// login(email, password);
		console.log(email);

		firebase.auth().createUserWithEmailAndPassword(email.toString().trim(), password).catch(function(error) {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;

			console.log(errorCode, errorMessage);
			// ...
		});
	};
	return (
		<Fragment>
			<Header />
			<Jumbotron>
				<h1>Registration</h1>
				<Form onSubmit={onSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control onChange={onChange} name="email" type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control onChange={onChange} name="password" type="password" placeholder="Password" />
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Jumbotron>
		</Fragment>
	);
};

export default Login;
