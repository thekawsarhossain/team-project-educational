import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './slices/blogSlice';
import cartSlice from './slices/cartSlice';
import courseSlice from './slices/courseSlice';
import eventSlice from './slices/eventSlice';

export const store = configureStore({
  reducer: {
    courses: courseSlice,
    events: eventSlice,
    blogs: blogSlice,
    cart: cartSlice,
  },
});
