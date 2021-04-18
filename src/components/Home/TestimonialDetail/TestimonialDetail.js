import React from 'react';
import { Card, Button } from 'react-bootstrap';
import OwlCarouselContainer from './../OwlCarouselContainer/OwlCarouselContainer';

const TestimonialDetail = ({ review }) => {
	return (
		// <Card className="text-dark" style={{ width: '22rem', height: 'fitContent' }}>
		// 	<Card.Body>
		// 		<Card.Text>
		// 			{description}
		// 		</Card.Text>
		// 		<Card.Title>{name} </Card.Title>
		// 	</Card.Body>
		// </Card>
		<div class="gtco-testimonials">
			<div class="owl-carousel owl-carousel1 owl-theme">
				<OwlCarouselContainer review={review}></OwlCarouselContainer>
			</div>
		</div>
	);
};

export default TestimonialDetail;
