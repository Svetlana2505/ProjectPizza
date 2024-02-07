import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    items: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      const findItem = state.items.find(obj => obj.id === payload.id);
      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({
          ...payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce(
        (acc, obj) => obj.price * obj.count + acc,
        0
      );
    },
    minusItem: (state, { payload }) => {
      const findItem = state.items.find(obj => obj.id === payload);
      if (findItem) {
        findItem.count -= 1;
      }
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter(obj => obj.id !== payload);
    },
    clearItems: state => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
