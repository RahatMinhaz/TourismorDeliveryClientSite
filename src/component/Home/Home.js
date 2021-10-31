import React, { useEffect, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useOrders from '../../hooks/useOrders';
import { addToDb } from '../../utilities/localDb';
import Banner from '../Banner/Banner';
import FoodItems from '../FoodItems/FoodItems';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {
    const[pizzas, setPizzas] = useState([]);
    const [items, setItems] = useOrders(pizzas);
    const [displayPizzas, setDisplayPizzas] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch('https://radiant-hollows-10826.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setPizzas(data));
    },[]);

    const handleOrders = (pizza) => {
        const newOrders = [...items, pizza];
        setItems(newOrders);
        addToDb(pizza._id);
    }
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
                    {
                        displayPizzas.map(pizza => <FoodItems
                            id={pizza._id}
                            pizza={pizza}
                            handleOrders={handleOrders}
                        >
                        </FoodItems>)
                    }
                    </div></div>))
                }
            </div>
        </div>
    </div>
     <Footer></Footer> 
</div>
    );
};

export default Home;