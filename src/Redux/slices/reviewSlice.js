import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// thunk to get data using api here 
export const fetchReviews = createAsyncThunk(
    'review/fetchReviews',
    async () => {
        const response = await fetch('https://lit-lake-52047.herokuapp.com/reviews')
            .then(res => res.json())
        return response
    }
)


const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [],
        status: 'idle'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            state.reviews = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchReviews.pending, (state, action) => {
            state.status = 'pending'
        })
    },
});

export default reviewSlice.reducer;