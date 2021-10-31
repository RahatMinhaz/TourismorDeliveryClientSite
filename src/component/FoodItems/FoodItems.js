import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const FoodItems = (props) => {
    const {name, img, desc, _id} = props.pizza
    return (
        <div>
            <img className="w-75 mt-5" src={img} alt="" />
            <h1>{name}</h1>
            <p className = "mt-3">{desc}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-primary mt-5">Details</button>
            </Link>
            <div>
            <button
                    onClick={() => props.handleOrders(props.pizza)}
                    className="btn btn-primary mt-3"
                ><FontAwesomeIcon icon={faFirstOrder} />Order this item</button>
            </div>
        </div>
    );
};

export default FoodItems;