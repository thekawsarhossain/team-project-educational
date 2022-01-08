import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './slices/blogSlice';
import cartSlice from './slices/cartSlice';
import courseSlice from './slices/courseSlice';
import eventSlice from './slices/eventSlice';
import messagesSlice from './slices/messagesSlice';
import reviewSlice from './slices/reviewSlice';

export const store = configureStore({
  reducer: {
    courses: courseSlice,
    events: eventSlice,
    blogs: blogSlice,
    messages: messagesSlice,
    reviews: reviewSlice,
    cart: cartSlice,
  },
});
