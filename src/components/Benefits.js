import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Benefits = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<h2> Benefits Of Registering</h2>
					</Col>
				</Row>
				<Row>
					<Col>
						<h2>Suppliers</h2>
						<p>Free</p>
						<ul>
							<li>point 1</li>
							<li>point 2</li>
							<li>point 3</li>
						</ul>
					</Col>
					<Col>
						<h2>Customers</h2>
						<p>Free</p>
						<ul>
							<li>point 1</li>
							<li>point 2</li>
							<li>point 3</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Benefits;
