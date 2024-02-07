import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async ({ category, order, sortBy, searchValue, currentPage }) => {
    const { data } = await axios.get(
      `https://64df426471c3335b25825904.mockapi.io/Item?page=${currentPage}&limit=3&${category}&sortBy=${sortBy}&order=${order}${searchValue} `
    );
    return data;
  }
);

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: {
    pizzas: [],
    status: 'loading', //loading | success | error
  },
  reducers: {
    addPizzas: (state, { payload }) => {
      state.pizzas = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPizzas.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPizzas.fulfilled, (state, { payload }) => {
        state.pizzas = payload;
        state.status = 'success';
      })
      .addCase(fetchPizzas.rejected, state => {
        state.pizzas = [];
        state.status = 'error';
      });
  },
});

export const { addPizzas } = pizzasSlice.actions;

export const pizzasReducer = pizzasSlice.reducer;
