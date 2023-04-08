import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../../constants/constants';

export const fetchBook = createAsyncThunk('book/fetchBook', async id => {
  const { data } = await axios.get(`${BASE_URL}${id}?key=${API_KEY}`);
  return data;
});

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    book: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchBook.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchBook.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.book = action.payload;
    },

    [fetchBook.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    },
  },
});

export const selectBook = state => state.book;

export default bookSlice.reducer;
