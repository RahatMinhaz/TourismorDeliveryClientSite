import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import './MyOrders.css'
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';



const MyOrders = () => {
    const {user,loading} = useAuth();
    const [orders,setOrders] = useState([]);

    // Showing logged in user's order on UI

    useEffect(() =>{
        const url= `https://radiant-hollows-10826.herokuapp.com/usersinfo?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])

    // Delete an order

    const handleDelete = id =>{
        const proceed = window.confirm("Do you want to delete the order?");
        if(proceed){
            const url = `https://radiant-hollows-10826.herokuapp.com/usersinfo/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0){
                alert('item deleted')
        const remainingItems = orders.filter(order => order._id !== id);
        setOrders(remainingItems);
            }
        });
        }
    }
    if(loading){return <Spinner animation="border" variant="primary" />}
    return (
        <div>
            <h2 className="mb-3">My Orders</h2>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Orders">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Present Address</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Ordered Pizza</TableCell>
                        <TableCell align="right">Payment</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
                {orders.map((row) => (
            <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {row.customerName}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.pizzaName}</TableCell>
                <TableCell align="right">{row.payment ? 'Paid' : <Link to={`/pay/${row._id}`}><button className='btn btn-warning'>Pay</button></Link>}</TableCell>
                <TableCell align="right">
                    <button onClick={() => handleDelete(row._id)} className="btn btn-primary">Cancel Order</button></TableCell>
            </TableRow>
                ))}
            </TableBody>
            </Table>
            </TableContainer>
            <div className="cc">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MyOrders;