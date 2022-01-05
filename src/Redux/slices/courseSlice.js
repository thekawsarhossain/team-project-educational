import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// thunk to get data using api here 
export const fetchCourses = createAsyncThunk(
    'course/fetchCourses',
    async () => {
        const response = await fetch('https://polar-beach-00400.herokuapp.com/all-courses')
            .then(res => res.json())
        return response
    }
)

const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        allCourses: [],
        status: 'idle'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.allCourses = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchCourses.pending, (state, action) => {
            state.status = 'pending'
        })
    },
});

export default courseSlice.reducer;