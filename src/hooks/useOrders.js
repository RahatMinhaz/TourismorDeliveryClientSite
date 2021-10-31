import { useState, useEffect } from 'react';
import { getOrder } from '../utilities/localDb';

const useOrders = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const savedOrder = getOrder();
        const keys = Object.keys(savedOrder);
        fetch('https://radiant-hollows-10826.herokuapp.com/foods/:id', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                if (products.length) {
                    const storedOrder = [];
                    for (const _id in savedOrder) {
                        const addedProduct = products.find(product => product._id === _id);
                        if (addedProduct) {
                            // set quantity
                            const quantity = savedOrder[_id];
                            addedProduct.quantity = quantity;
                            storedOrder.push(addedProduct);
                        }
                    }
                    setOrder(storedOrder);
                }
            })


    }, []);

    return [order, setOrder];
}

export default useOrders;