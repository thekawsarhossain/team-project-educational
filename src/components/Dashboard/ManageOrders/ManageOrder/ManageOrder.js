import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchOrders } from '../../../../Redux/slices/ordersSlice';

const ManageOrder = ({ orders }) => {

    const dispatch = useDispatch();
    const { name, email, address, number, status, date, _id, price } = orders;

    // handle delete here 
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
                        alert('deleted');
                        dispatch(fetchOrders())
                    }
                })
        }
    }

    // handle status here 
    const handleStatus = id => {
        fetch(`https://lit-lake-52047.herokuapp.com/order/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' }
        })
            .then(response => response.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('status updated')
                    dispatch(fetchOrders())
                }
            })
    }

    return (
        <>
            <TableRow>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">{address}</TableCell>
                <TableCell align="left">{number}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{date}</TableCell>
                <TableCell align="left">{status}</TableCell>
                <TableCell align="left">{price}</TableCell>
                <TableCell align="center">
                    <Button onClick={() => handleDelete(_id)} sx={{ color: 'error.main', bgcolor: 'text.primary', mx: 1 }} ><DeleteIcon /> </Button>
                    {status === 'shipped' ? '' : <Button onClick={() => handleStatus(_id)} sx={{ color: 'error.main', bgcolor: 'text.primary' }} ><BookmarkAddIcon /> </Button>}
                </TableCell>
            </TableRow >
        </>
    );
};

export default ManageOrder;