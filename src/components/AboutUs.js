import React, {Fragment} from "react";
import {Jumbotron} from "react-bootstrap";
import {Row, Col, Card, Button} from "react-bootstrap";

const HomeSection = () => {
	return (
		<Fragment>
			<Jumbotron
				style={{backgroundColor: "#E2E5DE", paddingTop: 30, paddingBottom: 30}}
			>
				<h1>About Us</h1>
				<br></br>
				<ul>
					<li>
						We are a not for profit website looking to onboard Personal
						Protective Equipment and Hospitals in Nigeria to list their PPE
						requirements on our site
					</li>
					<li>
						We are a team born out of a hackathon event hosted by MIT, Boston,
						USA (Massachusetts Institute of Technology) and our goal is to make
						PPE more accessible to health workers and Doctors across Africa
					</li>
					<li>
						Through research we found that lack of Personal Protective
						Equipment(PPE) was a big problem and this led to infections in
						Doctors on the front line.
					</li>
					<li>
						We are in the process of developing our website still but want to
						engage in a conversation with stakeholders on how are solution looks
						and take feedback on our design and eventually onboard you to list
						and use our free website as an information portal
					</li>
				</ul>
				<br></br>
				<h5>Our Team</h5>
				<br></br>
				<br></br>
				<div>
					<Row
						style={{
							textAlign: "center",
							alignItems: "center",
							justifyContent: "center",
							display: "flex",
						}}
					>
						<Col
							xs={12}
							md={6}
							lg={4}
							style={{
								textAlign: "center",
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
							}}
						>
							<Card
								style={{
									textAlign: "center",
									alignItems: "center",
									justifyContent: "center",
									display: "flex",
									width: "18rem",
								}}
							>
								<Card.Img
									variant="top"
									src="https://media-exp1.licdn.com/dms/image/C4E03AQEDcM1yGUGnBw/profile-displayphoto-shrink_800_800/0?e=1602115200&v=beta&t=0-r4gM-XNJ6fCPoxPARuTD1e7GpyH5pN5tGxlu8db04"
								/>
								<Card.Body>
									<Card.Title>Milind Sabarad</Card.Title>
									<Card.Text>Product Owner</Card.Text>
									<Button
										href="https://www.linkedin.com/in/milind-sabarad/"
										target="_blank"
										variant="primary"
									>
										Linkedin
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col
							xs={12}
							md={6}
							lg={4}
							style={{
								textAlign: "center",
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
							}}
						>
							<Card
								style={{
									textAlign: "center",
									alignItems: "center",
									justifyContent: "center",
									display: "flex",
									width: "18rem",
								}}
							>
								<Card.Img
									variant="top"
									src="https://media-exp1.licdn.com/dms/image/C5603AQH_pP2iQSo4xQ/profile-displayphoto-shrink_800_800/0?e=1602115200&v=beta&t=Vo7SDs5rtD9LeaPLAGZ6kDqxAiwvhTwAcZdRGnOC_Zk"
								/>
								<Card.Body>
									<Card.Title>IKWUO AFIA</Card.Title>
									<Card.Text>Supplier/Consumer expert</Card.Text>
									<Button
										href="https://www.linkedin.com/in/ikwuo-afia-0384b6158/"
										target="_blank"
										variant="primary"
									>
										Linkedin
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col
							xs={12}
							md={6}
							lg={4}
							style={{
								textAlign: "center",
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
							}}
						>
							<Card style={{width: "18rem"}}>
								<Card.Img
									variant="top"
									src="https://media-exp1.licdn.com/dms/image/C5603AQGGbYhTAk8v8w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=HDLk3D5yuoEVA17MhFqqYNXcwP0WiQDtek93W5eMh2E"
								/>
								<Card.Body>
									<Card.Title>Chirag Ramachandra</Card.Title>
									<Card.Text>WebApplication Developer</Card.Text>
									<Button
										href="https://www.linkedin.com/in/chirag-ramachandra/"
										target="_blank"
										variant="primary"
									>
										Linkedin
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</div>
			</Jumbotron>
		</Fragment>
	);
};

export default HomeSection;
