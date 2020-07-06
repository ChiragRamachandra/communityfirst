import React, { Fragment, useState } from 'react';
import { Table, Container, Row, Col, Button, Modal } from 'react-bootstrap';

const Shippers = () => {
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<Fragment>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>ABC Health xys</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			<Container>
				{/* Stack the columns on mobile by making one full-width and the other half-width */}
				<Row>
					<Col xs={1} md={1} lg={1} />
					<Col xs={10} md={10} lg={10}>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Product</th>
									<th>Description</th>
									<th>Quantity Needed</th>
									<th>Customer location</th>
									<th>Notes</th>
									<th>Required By</th>
									<th>Posted On</th>
									<th>Post Expiry</th>
									<th>Customer Info</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Facemask</td>
									<td>Disposable- Surgical</td>
									<td>500</td>
									<td>2 Hello Street NYC NY-USA</td>
									<td>Need@multiple locations</td>
									<td>2020-05-30</td>
									<td>2020-05-30</td>
									<td>2020-05-30</td>
									<td onClick={handleShow}>ABC Health</td>
								</tr>
								<tr>
									<td>Facemask</td>
									<td>Disposable- Surgical</td>
									<td>500</td>
									<td>2 Hello Street NYC NY-USA</td>
									<td>Need@multiple locations</td>
									<td>2020-05-30</td>
									<td>2020-05-30</td>
									<td>2020-05-30</td>
									<td onClick={handleShow}>ABC Health</td>
								</tr>
								<tr>
									<td>Facemask</td>
									<td>Disposable- Surgical</td>
									<td>500</td>
									<td>2 Hello Street NYC NY-USA</td>
									<td>Need@multiple locations</td>
									<td>2020-05-30</td>
									<td>2020-05-30</td>
									<td>2020-05-30</td>
									<td onClick={handleShow}>ABC Health</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col xs={1} md={1} lg={1} />
				</Row>
			</Container>
		</Fragment>
	);
};

export default Shippers;
