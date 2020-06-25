import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const HowTo = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<Image
							src="https://images.pexels.com/photos/4177882/pexels-photo-4177882.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
							fluid
						/>
					</Col>
					<Col>
						<div>
							<h2> How to Use the Platform</h2>
							<ul>
								<li>point 1</li>
								<li>point 2</li>
								<li>point 3</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HowTo;
