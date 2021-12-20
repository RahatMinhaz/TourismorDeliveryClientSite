import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './AddNewService.css';

const AddNewService = () => {
    const [addService, setAddService] = useState({});
    const nameRef = useRef();
    const descRef = useRef();
    const imgRef = useRef();
    const customerRef = useRef();
    const [bookingSucces,setBookingSuccess] = useState(false);

    // Getting data from database

    useEffect(() =>{
        fetch('https://radiant-hollows-10826.herokuapp.com/foods2')
        .then(res => res.json())
        .then(data => setAddService(data));
    },[])

    // Adding an offering to home page

    const handleAddService = e =>{
        const name = nameRef.current.value;
        const desc = descRef.current.value;
        const img = imgRef.current.value;
        const customer = customerRef.current.value;
        const newUser = {name:name,desc:desc,img:img,customer:customer}

        fetch('https://radiant-hollows-10826.herokuapp.com/foods2',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
            const addedService = data;
            const newUsers = [...addService, addedService]
            console.log(newUsers);
            setAddService(newUsers);
            if(data){
                setBookingSuccess(true);
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            <h2 className="mt-5 mb-4">Want more variation? Add a Suggestion</h2>
            <Form.Control className="mb-4" type="text" ref={nameRef} placeholder="Pizza Name" />
            <Form.Control className="mb-4" type="text" ref={descRef} placeholder="Add Description (if any)" />
            <Form.Control className="mb-4" type="text" ref={imgRef} placeholder="Add Image url (if any)" />
            <Form.Control type="text" ref={customerRef} placeholder="Write Your Name" />
            <button className="btn btn-primary mt-4" onClick={handleAddService} type="submit">Add Suggestion</button>
            <div className="cc">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default AddNewService;