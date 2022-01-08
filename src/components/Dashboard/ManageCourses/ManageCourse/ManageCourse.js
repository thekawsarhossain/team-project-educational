import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchCourses, removeFromList } from '../../../../Redux/slices/courseSlice';

const ManageCourse = ({ courses }) => {

    const dispatch = useDispatch();

    const { courseName, img, newPrice, addedby, _id, instructorName, instructorImg } = courses;

    const handleCourse = id => {
        const procced = window.confirm('Are you sure you want DELETE ?')

        if (procced) {
            fetch(`https://lit-lake-52047.herokuapp.com/course/${id}`, {
                method: 'DELETE',
                header: { 'content-type': 'application/json' }
            })
                .then(response => response.json())
                .then(result => {
                    if (result.deletedCount) {
                        dispatch(removeFromList(id))
                        dispatch(fetchCourses())
                    }
                })
        }
    }

    return (
        <>
            <TableRow>
                <TableCell style={{ width: '25%' }} align="left"> <img style={{ width: '50%' }} src={img} alt="" /> </TableCell>
                <TableCell align="left">{courseName}</TableCell>
                <TableCell align="left">{newPrice}</TableCell>
                <TableCell align="left">{instructorName}</TableCell>
                <TableCell style={{ width: '12%' }} align="left"> <img style={{ width: '50%' }} src={instructorImg} alt="" /> </TableCell>
                <TableCell align="left">{addedby}</TableCell>
                <TableCell align="left"> <Button sx={{ color: 'error.main', bgcolor: 'text.primary' }} onClick={() => handleCourse(_id)}><DeleteIcon /> </Button> </TableCell>
            </TableRow >
        </>
    );
};

export default ManageCourse;