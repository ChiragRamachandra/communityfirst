import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Benefits = () => {
	return (
		<div
			style={{backgroundColor: "#E2E5DE", paddingTop: 30, paddingBottom: 30}}
		>
			<Container style={{marginTop: 30, marginBottom: 40}}>
				<Row>
					<Col style={{marginTop: 30}}>
						<h2 style={{marginTop: 30}}> BENEFITS</h2>
					</Col>
				</Row>

				<Row style={{marginTop: 30, marginBottom: 40}}>
					<Col xs={12} md={6} lg={4}>
						<h2>CUSTOMERS</h2>

						<ul>
							<li>
								<span style={{fontWeight: "bold"}}> FREE: </span> Literally no
								fees for listing, transaction or any other kind!
							</li>
							<li>
								<span style={{fontWeight: "bold"}}> Products:</span>
								Focuses on PPE only - Gloves, Masks, Gowns, Face Shields, Hand
								Sanitizers
							</li>
							<li>
								<span style={{fontWeight: "bold"}}> Market Expansion:</span>
								Get visibility to new customers, new market needs, expand to new
								areas of Africa
							</li>
							<li>
								<span style={{fontWeight: "bold"}}> Supplier Expansion:</span>
								Don't just depend on one supplier - the pandemic has caused
								disruptions in manufacturing, supply chain and logistics - get
								access to multiple suppliers who can fulfill your PPE needs on
								time and in sufficient quantities
							</li>
						</ul>
					</Col>
					<Col xs={12} md={6} lg={4}>
						<h2>SUPPLIERS</h2>

						<ul>
							<li>
								<span style={{fontWeight: "bold"}}> FREE: </span> Literally no
								fees for listing, transaction or any other kind!
							</li>
							<li>
								<span style={{fontWeight: "bold"}}> Products:</span>
								Focuses on PPE only - Gloves, Masks, Gowns, Face Shields, Hand
								Sanitizers
							</li>
							<li>
								<span style={{fontWeight: "bold"}}> Market Expansion:</span>
								Get visibility to new customers, new market needs, expand to new
								areas of Africa, revenue
							</li>
							<li>
								<span style={{fontWeight: "bold"}}> Donations:</span>
								Donate PPE or give away at discounted prices
							</li>
						</ul>
					</Col>
					<Col xs={12} md={6} lg={4}>
						<h2>SERVICE PROVIDERS</h2>

						<ul>
							<li>
								<span style={{fontWeight: "bold"}}> FREE: </span>Literally no
								fees for listing, transaction or any other kind!
							</li>
							<li>
								<span style={{fontWeight: "bold"}}> Products:</span>
								Focuses on Delivery services among others to enable the
								connection of PPE from suppliers to customers
							</li>
							<li>
								<span style={{fontWeight: "bold"}}> Market Expansion:</span>
								Get visibility to new customers, new market needs, expand to new
								areas of Africa, revenue
							</li>
							<li>
								<span style={{fontWeight: "bold"}}> Donations:</span>
								Donate delivery services or provide discounted pricing to access
								new customers while serving the community manage COVID
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Benefits;
