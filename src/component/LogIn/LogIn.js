import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import './LogIn.css';
const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <h2>Log In Here</h2>
            <div>
            <button
                    className="btn btn-warning"
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