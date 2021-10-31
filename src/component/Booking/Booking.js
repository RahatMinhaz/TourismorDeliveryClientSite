import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service,setService] = useState({});
    useEffect(() =>{
        fetch(`https://radiant-hollows-10826.herokuapp.com/foods/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[]);

    
    return (
        <div>
            <h2 className ="mb-5">Details of: {service.name}</h2>
            <img className = "w-50 mb-3" src={service.img} alt="" />
            <h4 className = "mt-5">{service.desc}</h4>
        </div>
    );
};

export default Booking;