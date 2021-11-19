import React, { useState } from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import { Alert, Form, Spinner } from 'react-bootstrap';
import './Register.css'
import Footer from '../Footer/Footer';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState ({});
    const history = useHistory();
    const location = useLocation();
    const[error,setError] = useState(' ');
    const {user,registerUser,loading,authError} = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert("password didn't match");
            return
        }
        if(loginData.password.length < 6){
            setError("Password must be at least 6 characters long");
            return;
        }
        registerUser(loginData.email,loginData.password,loginData.name,location,history);
        e.preventDefault();
    }

    return (
<div>
<div className = "reg-form">
            <div>
            <h2>Register Here</h2>
            <div className="container">
            { !loading &&
                <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text"
                    name="name" placeholder="Enter User Name"
                    onBlur={handleOnBlur}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                    name="email" placeholder="Enter email"
                    onBlur={handleOnBlur}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className= "mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onBlur={handleOnBlur} placeholder="Password" />
                </Form.Group>
                <Form.Group className= "mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="password2" onBlur={handleOnBlur} placeholder="Confirm Password" />
                </Form.Group>
            <button 
            type= "submit" className="btn btn-primary mb-4">
                Submit
            </button>
                </Form>}
                {loading && <Spinner animation="border" />}
                {user?.email && ['success',].map((variant, idx) => (
                                    <Alert key={idx} variant={variant}>
                                        Registered {variant}fully
                                    </Alert>
                        ))}
                {authError && ['danger'].map((variant, idx) => (
                                    <Alert key={idx} variant={variant}>
                                        Account already exists!
                                    </Alert>
                        ))}
            </div>
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