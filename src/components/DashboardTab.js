import React, { useState, Fragment } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Customers from '../components/Customers';
import Suppliers from '../components/Suppliers';
import Shippers from '../components/Shippers';

const DashboardTab = () => {
	const [ key, setKey ] = useState('customers');

	return (
		<Fragment>
			<h1 style={{ textAlign: 'center', paddingTop: 30 }}>MarketPlace/Centralized Management Sys.</h1>
			<Tabs transition={false} id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
				<Tab eventKey="customers" title="Customers">
					<Customers />
				</Tab>
				<Tab eventKey="profile" title="Suppliers">
					<Suppliers />
				</Tab>
				<Tab eventKey="contact" title="Shippers">
					<Shippers />
				</Tab>
			</Tabs>
		</Fragment>
	);
};

export default DashboardTab;
