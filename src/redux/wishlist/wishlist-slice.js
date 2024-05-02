import { createSlice } from '@reduxjs/toolkit';
import { toggleItemtoWishlist, mergeCurrentAndStoredWishlist } from './wishlist.utils';

const initialState = {
  hidden: true,
  wishlistItems: []
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleMessageHidden: (state, action) => {
      state.hidden = action.payload;
    },
    toggleWishlist: (state, action) => {
      state.wishlistItems = toggleItemtoWishlist(state.wishlistItems, action.payload);
    },
    removeWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        wishlistItem => wishlistItem.id !== action.payload.id
      );
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
    restoreWishlist: (state, action) => {
      state.wishlistItems = mergeCurrentAndStoredWishlist(state.wishlistItems, action.payload);
    }
  }
});

export const { toggleMessageHidden, toggleWishlist, removeWishlist, clearWishlist, restoreWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;