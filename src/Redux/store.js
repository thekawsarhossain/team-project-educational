import { configureStore } from '@reduxjs/toolkit';
import courseSlice from './slices/courseSlice';
import eventSlice from './slices/eventSlice';



export const store = configureStore({
  reducer: {
    courses: courseSlice,
    events: eventSlice,
   
  },
});
