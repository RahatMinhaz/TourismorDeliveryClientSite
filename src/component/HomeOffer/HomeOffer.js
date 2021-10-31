import React from 'react';

const HomeOffer = (props) => {
    const {name, img} = props.pizza
    return (
        <div>
            <img className="w-75 mt-5" src={img} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default HomeOffer;