import React, { Fragment } from 'react';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';

const HomeSection = () => {
	return (
		<Fragment>
			<Jumbotron>
				<Container>
					{/* Stack the columns on mobile by making one full-width and the other half-width */}
					<Row>
						<Col xs={1} md={1} lg={1} />
						<Col xs={10} md={8} lg={10}>
							<div style={{ alignText: 'center', alignItems: 'center' }}>
								<h1>Connecting PPE Customers with Suppliers and Shippers</h1>
								<p>
									Supply-Change is an online Marketplace that facilitates distribution of Personal
									Protective Equipment by connecting people with Supply to the people with Demand
								</p>
							</div>
						</Col>
						<Col xs={1} md={1} lg={1} />
					</Row>
				</Container>

				<Container>
					{/* Stack the columns on mobile by making one full-width and the other half-width */}
					<Row>
						<Col xs={4} md={4} lg={4}>
							<Image src={require('../images/elements/people.png')} rounded />
							<p>1000+ Customers</p>
						</Col>
						<Col xs={4} md={4} lg={4}>
							<div style={{ alignText: 'center', alignItems: 'center' }}>
								<Image src={require('../images/elements/building.png')} rounded />
								<p>50+ Suppliers </p>
							</div>
							<p style={{ paddingTop: 50 }}>
								<Button variant="info">
									<a href="/dashboard">View Our Dashboard</a>
								</Button>
							</p>
						</Col>
						<Col xs={4} md={4} lg={4}>
							<Image src={require('../images/elements/shipping.png')} rounded />
							<p>20+ Shippers</p>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</Fragment>
	);
};

export default HomeSection;
