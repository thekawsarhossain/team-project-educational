import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './slices/blogSlice';
import courseSlice from './slices/courseSlice';
import eventSlice from './slices/eventSlice';
import messagesSlice from './slices/messagesSlice';
import ordersSlice from './slices/ordersSlice';
import reviewSlice from './slices/reviewSlice';


export const store = configureStore({
  reducer: {
    courses: courseSlice,
    events: eventSlice,
    blogs: blogSlice,
    messages: messagesSlice,
    reviews: reviewSlice,
    orders: ordersSlice,
  },
});
