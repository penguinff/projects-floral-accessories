import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart, mergeCurrentAndStoredCart } from '../cart/cart.utils';

const initialState = {
  hidden: true,
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartHidden: (state, action) => {
      state.hidden = action.payload;
    },
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    restoreCart: (state, action) => {
      state.cartItems = mergeCurrentAndStoredCart(state.cartItems, action.payload);
    }
  }
});

export const { toggleCartHidden, addItem, removeItem, clearItemFromCart, clearCart, restoreCart } = cartSlice.actions;

export default cartSlice.reducer;
