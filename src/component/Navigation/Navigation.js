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
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="logo-img">
                                <img className="w-50" src={logo} alt="" />
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
                                    </NavLink>
                                    :<NavLink to="/home"></NavLink>}
                                    {
                                        user.email?
                                        <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/manage" className="items">
                                    <li>Manage Orders</li>
                                    </NavLink>
                                    :<NavLink to="/home"></NavLink>}
                                    {
                                        user?.email?
                                        <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/addservice" className="items">
                                    <li>Add a Service</li>
                                    </NavLink>
                                    :<NavLink to="/home"></NavLink>}
                                    {
                                        user?.email?
                                        <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/pay/:foodId" className="items">
                                    <li>Payment</li>
                                    </NavLink>
                                    :<NavLink to="/home"></NavLink>}
                                    <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/contacts" className="items">
                                    <li>Contacts</li>
                                    </NavLink>
                                    {
                                        user?.email?
                                        <NavLink onClick={logOut} activeStyle = {{fontweight: "bold", color: "red"}} to="/login" className="items">
                                    <li>Log Out</li>
                                    </NavLink>:
                                        <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/login" className="items">
                                    <li>Log In</li>
                                    </NavLink>}
                                    <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/registration" className="items">
                                    <li>Register</li>
                                    </NavLink>
                                    <h2 className="me-4">{user.displayName}</h2>
                                    <h5>{user.email}</h5>
                                </ul>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navigation;