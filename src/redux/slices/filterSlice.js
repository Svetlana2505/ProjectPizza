import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    categoryId: 0,
    currentPage: 1,
    sort: {
      name: 'популярности',
      sort: 'rating',
    },
  },
  reducers: {
    setCategoryId(state, { payload }) {
      state.categoryId = payload;
    },
    setSort(state, { payload }) {
      console.log(payload);
      state.sort = payload;
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions;

export const activeReducer = filterSlice.reducer;
