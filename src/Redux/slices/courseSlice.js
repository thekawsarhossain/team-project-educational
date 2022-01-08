import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// thunk to get data using api here 
export const fetchCourses = createAsyncThunk(
    'course/fetchCourses',
    async () => {
        const response = await fetch('https://lit-lake-52047.herokuapp.com/all-courses')
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
        removeFormReadingList: (state, { payload }) => {
            state.allCourses = state.allCourses.filter(course => course._id !== payload.id);
        },
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

export const { removeToCart } = courseSlice.actions;
export default courseSlice.reducer;