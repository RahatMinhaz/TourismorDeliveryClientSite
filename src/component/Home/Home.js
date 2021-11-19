import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import BottomBanner from '../BottomBanner/BottomBanner';
import FoodItems from '../FoodItems/FoodItems';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {
    const[pizzas, setPizzas] = useState([]);
    const {user,loading} = useAuth();
    useEffect(() => {
        fetch('https://radiant-hollows-10826.herokuapp.com/foods2')
        .then(res => res.json())
        .then(data => setPizzas(data));
    },[]);

    if(loading){return <Spinner animation="border" variant="primary" />}

    return (
        <div>
        <h2>{user.displayName}</h2>
        <h1 className = "pb-5">Welcome to <span className = "text-primary">Pizza</span> Paradise!</h1>
        <h3>
            We Deliver you pizzas from top pizza places from you local area to your doorstep faster than anyone
        </h3>
            <Banner></Banner> 
    <div className = "container">
        <h1 className = "mb-5">Here's the Available Pizzas</h1>
        <div className="services">
            {/* Pizza List */}
            <div className="row">
                {
                    pizzas.map((pizza) => (<div className = "col-lg-4"><div className = "pp"><FoodItems key ={pizza.id}
                    pizza={pizza}></FoodItems><Route><NavLink to={`/home/${pizza.id}`} activeStyle = {{ fontWeight:"bold", color: "red"}}></NavLink></Route>
                    </div></div>))
                }
            </div>
        </div>
    </div>
        <BottomBanner></BottomBanner>
        <AboutUs></AboutUs>
        <Footer></Footer> 
</div>
    );
};

export default Home;