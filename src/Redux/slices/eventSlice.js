import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// thunk to get data using api here 
export const fetchEvents = createAsyncThunk(
    'event/fetchEvents',
    async () => {
        const response = await fetch('https://lit-lake-52047.herokuapp.com/all-events')
            .then(res => res.json())
        return response
    }
)

// single event data 
export const fetchEventDetails = createAsyncThunk(
    'eventDetails/fetchEventDetails',
    async (id) => {
        const response = await fetch(`https://lit-lake-52047.herokuapp.com/events/${id}`)
            .then(res => res.json())
        return response
    }
)

const eventSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        eventDetails: {},
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
        builder.addCase(fetchEventDetails.fulfilled, (state, action) => {
            state.eventDetails = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchEventDetails.pending, (state, action) => {
            state.status = 'pending'
        })
    },
});

export default eventSlice.reducer;