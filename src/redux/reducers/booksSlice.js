import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../../constants/constants';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async values => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${values.search}+inauthor:${values.search}+subject:${values.category}&orderBy=${values.order}&startIndex=${values.startIndex}&maxResults=30&key=${API_KEY}`
  );
  return data;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: null,
    error: null,
  },
  reducers: {
    getLoadMoreBooks: (state, action) => {
      console.log(state.books);
    },
  },
  extraReducers: {
    [fetchBooks.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.books = action.payload;
    },

    [fetchBooks.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    },
  },
});

export const { getLoadMoreBooks } = booksSlice.actions;

export const selectBooks = state => state.books;

export default booksSlice.reducer;
