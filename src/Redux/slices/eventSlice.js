import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// thunk to get data using api here 
export const fetchEvents = createAsyncThunk(
    'event/fetchEvents',
    async () => {
        const response = await fetch('/events.JSON')
            .then(res => res.json())
        return response
    }
)

const eventSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        status: 'idle'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            state.events = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchEvents.pending, (state, action) => {
            state.status = 'pending'
        })
    },
});

export default eventSlice.reducer;