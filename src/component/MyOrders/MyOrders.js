import React, { useEffect, useState } from 'react';
import useFoods from '../../hooks/useFoods';
import Footer from '../Footer/Footer';

const MyOrders = () => {
    const [foods,setFoods] = useFoods();
    return (
        <div>
            <h1>Manage Your Orders</h1>
            <h2>{foods.length}</h2>
            <div className="position">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MyOrders;