import React from 'react';
import { Link } from 'react-router-dom';

const FoodItems = (props) => {
    const {name, img, desc, _id} = props.pizza
    return (
        <div>
            <img className="w-50 mt-5" src={img} alt="" />
            <h1>{name}</h1>
            <p className = "mt-3">{desc}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-primary mt-5">Details</button>
            </Link>
            <div>
            </div>
        </div>
    );
};

export default FoodItems;