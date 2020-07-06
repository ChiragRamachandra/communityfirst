import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = ({ firebaseFunc }) => {
	console.log(firebaseFunc);
	let logout = null;

	if (firebaseFunc !== undefined) {
		logout = firebaseFunc.signOut;
	}
	console.log(logout);
	return (
		<Fragment>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="/">Community First</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="/about-us">About Us</Nav.Link>
						<Nav.Link href="/dashboard">Dashboard</Nav.Link>
						<NavDropdown title="Who Is This For " id="collasible-nav-dropdown">
							<NavDropdown.Item href="# ">People willing to donate</NavDropdown.Item>
							<NavDropdown.Item href="# ">People in Need</NavDropdown.Item>
							<NavDropdown.Item href="# ">People willing to facilitate transport</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="# ">Why should you choose this platform?</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link href="/login">LOGIN</Nav.Link>
						<Nav.Link onClick={logout}>LOGOUT</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

export default Header;
