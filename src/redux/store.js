import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './reducers/booksSlice';
import bookSlice from './reducers/bookSlice';

export const store = configureStore({
  reducer: {
    books: booksSlice,
    book: bookSlice,
  },
});
