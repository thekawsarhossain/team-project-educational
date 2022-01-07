import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// thunk to get data using api here 
// export const fetchCourses = createAsyncThunk(
//     'course/fetchCourses',
//     async () => {
//         const response = await fetch('https://lit-lake-52047.herokuapp.com/all-courses')
//             .then(res => res.json())
//         return response
//     }
// )


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        status: 'idle'
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeToCart: (state, action) => {
            state.cart = state.cart.filter(course => course.id !== action.payload)
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchCourses.fulfilled, (state, action) => {
    //         state.allCourses = action.payload;
    //         state.status = 'success'
    //     })
    //     builder.addCase(fetchCourses.pending, (state, action) => {
    //         state.status = 'pending'
    //     })
    // },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;