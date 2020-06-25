import React, { Fragment } from 'react';
import { Jumbotron, Button, Table, Container, Row, Col } from 'react-bootstrap';

const HomeSection = () => {
	return (
		<Fragment>
			<Jumbotron>
				<h1>COVID PPE Help</h1>
				<p>
					COVID PPE HELP is a network that facilitates distribution of Personal Protective Equipment (PPE) to
					organizations in forms of customers, suppliers, donors and logistics to help fulfill PPE needs
					across Canada.
				</p>
				<p>
					<Button variant="primary">Learn more</Button>
				</p>
				<p>Please register below to be a part of the COVID PPE HELP network.</p>
				<Container>
					<Row>
						<Col />
						<Col>
							<Table striped bordered hover variant="dark">
								<thead>
									<tr>
										<th>#</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Username</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<td>3</td>
										<td colSpan="2">Larry the Bird</td>
										<td>@twitter</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col />
					</Row>
				</Container>
			</Jumbotron>
		</Fragment>
	);
};

export default HomeSection;
