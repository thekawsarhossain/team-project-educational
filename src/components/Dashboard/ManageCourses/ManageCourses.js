/* eslint-disable react-hooks/rules-of-hooks */
import { CircularProgress, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import ManageCourse from './ManageCourse/ManageCourse';
import { useDispatch } from 'react-redux';
import { fetchCourses } from '../../../Redux/slices/courseSlice';


const ManageCourses = () => {
    // redux disptach hook here 
    const dispatch = useDispatch();

    // calling redux thunk to get data here 
    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch])

    const courses = useSelector(state => state?.courses?.allCourses)
    const loading = useSelector(state => state?.courses?.status)


    return (
        <>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Manage Courses</Typography>
            <TableContainer component={Paper} sx={{ my: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: 'text.secondary' }}>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>instructor Name</TableCell>
                            <TableCell>instructor Image</TableCell>
                            <TableCell>addedBy</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            loading === 'pending' ? <Box style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box> :
                                courses.map(course => <ManageCourse
                                    key={course._id}
                                    courses={course}
                                />)
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );
};

export default ManageCourses;