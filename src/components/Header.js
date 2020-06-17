import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
	return (
		<Fragment>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home">Community First</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#features">Features</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#pricing">About Us</Nav.Link>
						<NavDropdown title="Who Is This For " id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">People willing to donate</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">People in Need</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								People willing to facilitate transport
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Why should you choose this platform?</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Our Sponsors
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

export default Header;
