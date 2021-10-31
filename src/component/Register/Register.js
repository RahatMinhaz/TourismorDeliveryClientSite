import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from 'react-bootstrap';
import './Register.css'
import Footer from '../Footer/Footer';

const Register = () => {
    const[email,setEmail] = useState(' ');
    const[password,setPassword] = useState(' ');
    const[error,setError] = useState(' ');
    const auth = getAuth();

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    const handleRegistration = e =>{
        e.preventDefault();
        console.log(email,password);
        if(password.length < 6){
            setError("Password must be at least 6 characters long");
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError(' ');
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
<div>
<div className = "reg-form">
            <div>
            <h2>Register Here</h2>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="text">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required onBlur={handleEmailChange} placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
                    
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required onBlur={handlePasswordChange} placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" required onBlur={handlePasswordChange} placeholder="Confirm Password" />
                    </Form.Group>
              <button className="btn btn-primary px-3">Register</button>
            </Form> 
            <p className="pt-3">Already have an account? <Link to="/login">Log In here</Link></p>
            </div>
        </div>
        <div className="position-reg">
        <Footer></Footer>
        </div>
</div>
    );
};

export default Register;