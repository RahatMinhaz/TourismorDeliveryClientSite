import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner2 from '../../images/Banner2.jpg'
import './BottomBanner.css';


const BottomBanner = () => {
    return (
        <div>
            <h1 className="mt-4">Ordering Pizza Anywhere Anytime!</h1>
            <Container className="mb-5 mt-5">
                <Row>
                    <Col sm={8}>
                        <img className="w-75" src={Banner2} alt="" />
                    </Col>
                    <Col className= "verticalCenter" sm={4}>Our services are 24/7 so you can order from us whenever you want, we'll be at your services faster than anyone!</Col>
                </Row>
            </Container>
        </div>
    );
};

export default BottomBanner;