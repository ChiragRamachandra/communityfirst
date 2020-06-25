import React, { Fragment } from 'react';
import Header from '../components/Header';
import HomeSection from '../components/HomeSection';
import Benefits from '../components/Benefits';
import HowTo from '../components/HowTo';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const BeforeLoginHome = ({ firebaseFunc }) => {
	console.log(firebaseFunc);
	return (
		<Fragment>
			<Header />
			<HomeSection />
			<Benefits />
			<HowTo />
			<AboutUs />
			<Footer />
		</Fragment>
	);
};

export default BeforeLoginHome;
