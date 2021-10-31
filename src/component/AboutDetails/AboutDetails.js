import React from 'react';

const AboutDetails = (props) => {
    const { pht,feat} = props.line;
    return (
        <div>
            <h2 className = "pt-5 pb-5">{feat}</h2>
            <img className = "pt-5 w-75" src={pht} alt="" />
        </div>
    );
};

export default AboutDetails;