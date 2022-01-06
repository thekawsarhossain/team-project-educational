import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// thunk to get data using api here 
export const fetchBlogs = createAsyncThunk(
    'blog/fetchBlogs',
    async () => {
        const response = await fetch('https://polar-beach-00400.herokuapp.com/all-blogs')
            .then(res => res.json())
        return response
    }
)

const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        allBlogs: [],
        status: 'idle'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.allBlogs = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.status = 'pending'
        })
    },
});

export default blogSlice.reducer;