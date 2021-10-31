import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import FoodItems from '../FoodItems/FoodItems';
import Footer from '../Footer/Footer';
import './Menu.css';

const Menu = () => {
    const [pizzas,setPizzas] = useState([]);
    useEffect(() =>{
        fetch('https://radiant-hollows-10826.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setPizzas(data));
    },[])
    return (
        <div>
            <div className="container">
                <h1 className = "mb-5 mt-4">Here are Our Menu</h1>
            </div>
            <div className="row">
                {
                    pizzas.map((pizza) => (<div className = "col-lg-3"><div className = "pp"><FoodItems key ={pizza.id}
                    pizza={pizza}></FoodItems><Route><NavLink to={`/menu/${pizza.id}`} activeStyle = {{ fontWeight:"bold", color: "red"}}></NavLink></Route></div></div>))
                } 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Menu;