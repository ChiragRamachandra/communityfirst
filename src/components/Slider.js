import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
	return (
		<Fragment>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/4177882/pexels-photo-4177882.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Fragment>
	);
};

export default Slider;
