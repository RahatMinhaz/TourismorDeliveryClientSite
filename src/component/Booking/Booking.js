import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';

const Booking = () => {
    const { serviceId } = useParams();
    const [service,setService] = useState({});
    const {user} = useAuth();
    const initialInfo = {customerName: user.displayName, email: user.email, address: '', phone: ''}
    const [bookingInfo,setBookingInfo] = useState(initialInfo);
    const [bookingSucces,setBookingSuccess] = useState(false);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo);
        e.preventDefault();
    }

    // Placing an order

    const handleBookingSubmit = e =>{
        const order = {
            ...bookingInfo,
            price: service.price,
            pizzaName: service.name
        }

        // for logged in user's data

        fetch('https://radiant-hollows-10826.herokuapp.com/usersinfo',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                setBookingSuccess(true);
            }
        });

        // for manage all orders data

        fetch('https://radiant-hollows-10826.herokuapp.com/usersinfo2',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                setBookingSuccess(true);
            }
        });
        e.preventDefault();
    }

    useEffect(() =>{
        fetch(`https://radiant-hollows-10826.herokuapp.com/foods/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[]);

    
    return (
            <div>
                <Container className="mt-5">
                {bookingSucces && ['success',].map((variant, idx) => (
                                    <Alert key={idx} variant={variant}>
                                        Purchased {variant}fully
                                    </Alert>
                        ))}
                <h2 className="mb-4">Purchase</h2>
                <Row>
                    <Col>
                    <h2 className ="mb-5">Details of: {service?.name}</h2>
                    <h4 className = "mt-5 pb-5">{service?.desc}</h4>
                    <h4 className = "mt-5 pb-5">Price: {service?.price} Taka</h4>
                    </Col>
                    <Col xs={6}>
                    <img className = "w-75 mb-3" src={service?.img} alt="" />
                    </Col>
                    <Col>
                    <form>
                    <Form.Control className="mb-3" type="text" placeholder="Your Name"
                    name="customerName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}/>
                    <Form.Control className="mb-3" type="text" placeholder="Your Email"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}/>
                    <h4>Price(Taka)</h4>
                    <Form.Control disabled className='mb-3' type="text" defaultValue= {service?.price}/>
                    <Form.Control className="mb-3" type="text" placeholder="Your Phone" name="phone" onBlur={handleOnBlur} />
                    <Form.Control type="text" placeholder="Your Present Address" name="address" onBlur={handleOnBlur} />
                    <button onClick={handleBookingSubmit} type="submit"
                        className="btn btn-primary mt-3 mb-4"
                        ><FontAwesomeIcon icon={faFirstOrder} /> Order this item</button>
                    </form>
                    </Col>
                    </Row>
            </Container>
            <div className="cc">
                <Footer></Footer>
            </div>
            </div>
    );
};

export default Booking;