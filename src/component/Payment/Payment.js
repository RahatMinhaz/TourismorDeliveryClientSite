import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
import Footer from '../Footer/Footer';
import './Payment.css';

const stripePromise = loadStripe('pk_test_51K8RMgFS56lO8WqwzvUFefdZzcoTBaVhLnFRc9tUpvqIGzqwu8PT1PHUAniGJlat2UfrZLLvTJGXtrRalGssfv5X00EKT4ZrkO')

const Payment = () => {
    const {foodId} = useParams()
    const [ordered,setOrdered] = useState({});
    useEffect(() => {
        fetch(`https://radiant-hollows-10826.herokuapp.com/usersinfo/${foodId}`)
        .then(res => res.json())
        .then(data => setOrdered(data));
    },[foodId])
    return (
        <div>
            <h2 className='mt-4'>Pay for: {ordered?.pizzaName}</h2>
            <h2>{ordered?.price} Taka</h2>
            <h2 className='mb-5'>Customer: {ordered?.customerName}</h2>
            {ordered?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                ordered={ordered}
                />
            </Elements>}
            <div className='pr'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Payment;