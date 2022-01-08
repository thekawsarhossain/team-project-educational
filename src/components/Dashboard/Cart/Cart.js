import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../Redux/slices/ordersSlice';



const Cart = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])

    const orders = useSelector(state => state.orders.orders)
    const loading = useSelector(state => state.courses.status)

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want DELETE');
        if (proceed) {
            fetch(`https://lit-lake-52047.herokuapp.com/order/${id}`, {
                method: 'DELETE',
                haeders: { 'content-type': 'application/json' }
            })
                .then(response => response.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('delete done');
                        dispatch(fetchOrders())
                    }
                })
        }
    }

    return (
        <>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Cart Details</Typography>
            <TableContainer component={Paper} sx={{ my: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: 'text.secondary' }}>
                            <TableCell>Buyer Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Number</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            loading === 'pending' ? <Box style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box> :
                                orders?.map(order => <TableRow>
                                    <TableCell align="left">{order?.name}</TableCell>
                                    <TableCell align="left">{order?.address}</TableCell>
                                    <TableCell align="left">{order?.number}</TableCell>
                                    <TableCell align="left">{order?.email}</TableCell>
                                    <TableCell align="left">${order?.price}</TableCell>
                                    <TableCell align="left">${order?.status}</TableCell>
                                    <TableCell align="left">
                                        <Button onClick={() => handleDelete(order._id)}>Remove</Button>
                                    </TableCell>
                                </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );
};

export default Cart;




// 
{/* <TableCell align="left">
    <Button onClick={() => handleOrder(_id)} sx={{ color: 'error.main' }}><DeleteIcon /> </Button>
    {payment ? <Button onClick={() => swal({
        title: 'You already paid!',
        icon: 'success',
        confirmButtonText: 'Ok'
    })}>Paid</Button> : <Button onClick={() => history.push(`/dashboard/payment/${_id}`, { productName: productName, productPrice: productPrice })} sx={{ color: 'error.main' }}>Pay</Button>}
</TableCell> */}