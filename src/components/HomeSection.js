import React, {Fragment} from "react";
import {Jumbotron, Button, Container, Row, Col, Image} from "react-bootstrap";

const HomeSection = () => {
	return (
		<Fragment>
			<Jumbotron style={{backgroundColor: "white"}}>
				<Container>
					{/* Stack the columns on mobile by making one full-width and the other half-width */}
					<Row style={{marginBottom: 100, alignItems: "center"}}>
						<Col xs={1} md={1} lg={1} />
						<Col xs={10} md={8} lg={10}>
							<div style={{alignText: "center", alignItems: "center"}}>
								<h1>Connecting PPE Customers with Suppliers and Shippers</h1>
								<p>
									Community First is an online marketplace and dashboard that
									enables easy access to Personal Protective Equipment(PPE) to
									organizations in the form of suppliers, customers and service
									providers to help fulfill PPE need across Africa
								</p>
								<br></br>
								<p style={{textAlign: "center"}}>
									<Button variant="info">
										<a
											style={{
												textDecoration: "none",
												color: "#fff",
											}}
											href="https://ppesupplychange.typeform.com/to/lbIlbFoQ"
											target="_blank"
											rel="noopener noreferrer"
										>
											Register and List today, for free!
										</a>
									</Button>
								</p>
								<br></br>
								<p style={{textDecoration: "underline"}}>
									We do not charge any money to anyone - use this platform to
									help your community manage the pandemic better!
								</p>
							</div>
						</Col>
						<Col xs={1} md={1} lg={1} />
					</Row>
				</Container>

				<Container>
					{/* Stack the columns on mobile by making one full-width and the other half-width */}
					<Row>
						<Col xs={12} md={6} lg={4} style={{textAlign: "center"}}>
							<Image src={require("../images/elements/people.png")} rounded />
							<p style={{marginTop: 20}}>Find Customers</p>
						</Col>
						<Col xs={12} md={6} lg={4} style={{textAlign: "center"}}>
							<Image src={require("../images/elements/building.png")} rounded />
							<p style={{marginTop: 20}}>Find Suppliers </p>

							<p style={{paddingTop: 50}}>
								<Button variant="info">
									<a
										style={{
											textDecoration: "none",
											color: "#fff",
										}}
										href="/dashboard"
									>
										View Our Dashboard
									</a>
								</Button>
							</p>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<Image src={require("../images/elements/shipping.png")} rounded />
							<p style={{marginTop: 20}}>Find Service Providers</p>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</Fragment>
	);
};

export default HomeSection;
