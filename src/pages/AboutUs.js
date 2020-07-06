import React, { Fragment } from 'react';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const BeforeLoginHome = ({ firebaseFunc }) => {
	console.log(firebaseFunc);
	return (
		<Fragment>
			<Header firebaseFunc={firebaseFunc} />
			<AboutUs />

			<Footer />
		</Fragment>
	);
};

export default BeforeLoginHome;
