import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// thunk to get data using api here 
export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async () => {
        const response = await fetch('https://lit-lake-52047.herokuapp.com/orders')
            .then(res => res.json())
        return response
    }
)


const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        status: 'idle'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchOrders.pending, (state, action) => {
            state.status = 'pending'
        })
    },
});

export default ordersSlice.reducer;