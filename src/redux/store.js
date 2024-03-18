import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers';

export const store = configureStore({
  reducer: contactsReducer,
  devTools: process.env.NODE_ENV === 'development',
});
