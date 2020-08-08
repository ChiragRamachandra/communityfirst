import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";

const HowTo = () => {
	return (
		<div style={{backgroundColor: "white", paddingTop: 30, paddingBottom: 30}}>
			<Container style={{paddingTop: 30, paddingBottom: 40}}>
				<Row style={{paddingTop: 40, paddingBottom: 40}}>
					<Col xs={12} md={6} lg={6}>
						<Image
							src="https://images.pexels.com/photos/4177882/pexels-photo-4177882.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
							fluid
						/>
					</Col>
					<Col xs={12} md={6} lg={6}>
						<div>
							<h2> How to Use the Platform</h2>
							<ul>
								<li>
									If you are a customer who wants to purchase from suppliers or
									utilise service of our service provider: go to the dashboard
									and contact the particular vendor through the address
									mentioned
								</li>
								<li>
									If you are a supplier who wants to enlist their product:
									please fill in this{" "}
									<a
										href="https://ppesupplychange.typeform.com/to/lbIlbFoQ"
										target="_blank"
										rel="noopener noreferrer"
									>
										form
									</a>
									and we will get back to you shortly
								</li>
								<li>
									If you are a service provide who wants to enlist their
									service: please fill in this{" "}
									<a
										href="https://ppesupplychange.typeform.com/to/lbIlbFoQ"
										target="_blank"
										rel="noopener noreferrer"
									>
										form{" "}
									</a>
									and we will get back to you shortly
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HowTo;
