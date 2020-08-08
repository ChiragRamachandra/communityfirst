import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
	return (
		<div>
			<Container>
				<Row style={{marginBottom: 20}}>
					<Col style={{textAlign: "left"}} xs={6} md={6} lg={6}>
						Community First | All rights reserved
					</Col>
					<Col style={{textAlign: "right"}} xs={6} md={6} lg={6}>
						© Chirag Ramachandra
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
