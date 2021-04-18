import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie0r2FhbK9NprvKWBdfm9SDX4H3Lwnne5BadpUjlCrdwNaIx4L4QfxR9DWvYUDzkcj865FlxlY1uQbMCtH9SUIY00wdsqhEBk');

const ProcessPayment = ({handlePayment}) => {
	return (
		<>
			<Elements stripe={stripePromise}>
				<SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
			</Elements>
		</>
	);
};

export default ProcessPayment;
