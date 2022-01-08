import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// thunk to get data using api here 
export const fetchMessages = createAsyncThunk(
    'messages/fetchMessages',
    async () => {
        const response = await fetch('http://localhost:8000/messages')
            .then(res => res.json())
        return response
    }
)

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [],
        status: 'idle'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.messages = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchMessages.pending, (state, action) => {
            state.status = 'pending'
        })
    },
});

export default messageSlice.reducer;