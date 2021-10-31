import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css';
import logo from '../../images/logo.jpg';

const Navigation = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <div className="navigation-container">
                <div className="navigation container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="logo-img">
                                <img className="w-100" src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="nav-items">
                                <ul className = "d-flex align-items-end justify-content-end me-5">
                                    <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/home" className="items">
                                    <li>Home</li>
                                    </NavLink>
                                    <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/menu" className="items">
                                    <li>Menu</li>
                                    </NavLink>
                                    {
                                        user.email?
                                        <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/orders" className="items">
                                    <li>My Orders</li>
                                    </NavLink>:<NavLink to="/home"></NavLink>}
                                    <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/contacts" className="items">
                                    <li>Contacts</li>
                                    </NavLink>
                                    <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/about" className="items">
                                    <li>About Us</li>
                                    </NavLink>
                                    {
                                        user.email?
                                        <NavLink onClick={logOut} activeStyle = {{fontweight: "bold", color: "red"}} to="/login" className="items">
                                    <li>Log Out</li>
                                    </NavLink>:
                                        <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/login" className="items">
                                    <li>Log In</li>
                                    </NavLink>}
                                    <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/registration" className="items">
                                    <li>Register</li>
                                    </NavLink>
                                    <h1>{user.displayName}</h1>
                                    <h5>{user.email}</h5>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;