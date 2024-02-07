import { configureStore } from '@reduxjs/toolkit';
import { activeReducer } from './slices/filterSlice';
import { pizzasReducer } from './slices/pizzasSlice';
import { cartReducer } from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    categoryId: activeReducer,
    pizzas: pizzasReducer,
    cart: cartReducer,
  },
});
