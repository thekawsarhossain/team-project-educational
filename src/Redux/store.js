import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from 'redux';
import blogSlice from './slices/blogSlice';
import cartSlice from './slices/cartSlice';
import courseSlice from './slices/courseSlice';
import eventSlice from './slices/eventSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartSlice)

export const store = configureStore({
  reducer: {
    courses: courseSlice,
    events: eventSlice,
    blogs: blogSlice,
     cart: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  },
});
