import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../Redux/slices/ordersSlice';



const Cart = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])

    const orders = useSelector(state => state.courses.courses)
    console.log(orders)

    return (
        <>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Cart Details</Typography>
            <TableContainer component={Paper} sx={{ my: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: 'text.secondary' }}>
                            <TableCell>Image</TableCell>
                            <TableCell>Course Name</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>price</TableCell>
                            <TableCell>actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map(order => <TableRow>
                                <TableCell style={{ width: '25%' }} align="left"> <img style={{ width: '50%' }} src={order?.img} alt="courseImg" /> </TableCell>
                                <TableCell align="left">{order?.courseName}</TableCell>
                                <TableCell align="left">{order?.duration}</TableCell>
                                <TableCell align="left">${order?.newPrice}</TableCell>
                                <TableCell align="left">
                                    {/* <Button onClick={() => dispatch(removeToCart(order._id))}>Remove</Button> */}
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