import React, { useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import './LogIn.css';
const LogIn = () => {
    const [loginData, setLoginData] = useState ({});
    const {user,loginUser,loading,authError} = useAuth();
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        loginUser(loginData.email,loginData.password,location,history);
        e.preventDefault();
    }

    const handleGoogleLogin = e => {
        signInUsingGoogle(location,history);
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="mt-3">Log In Here</h2>
            <div>
                <div className="container">
                {!loading &&
                    <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                    name="email" placeholder="Enter email"
                    onChange={handleOnChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className= "mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleOnChange} placeholder="Password" />
                </Form.Group>
            <button 
            type= "submit" className="btn btn-primary mb-4">
                Submit
            </button>
                </Form>}
                {loading && <Spinner animation="border" />}
                {user?.email && ['success',].map((variant, idx) => (
                                    <Alert key={idx} variant={variant}>
                                            Logged in {variant}fully
                                    </Alert>
                        ))}
                {authError && ['danger'].map((variant, idx) => (
                                    <Alert key={idx} variant={variant}>
                                        Email or Password is incorrect!
                                    </Alert>
                        ))}
                </div>
                <h3>OR</h3>
            <button
                    className="btn btn-warning mt-4"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
            <div>
            <p className="mt-4">Don't have an account? <Link to = "/registration">Create An Account</Link></p>
            </div>
            <div className ="position">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default LogIn;