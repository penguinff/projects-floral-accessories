import WishlishActionTypes from './wishlist-types';

export const addWishlist = item => ({
  type: WishlishActionTypes.ADD_WISHLIST,
  payload: item
});

export const removeWishlist = item => ({
  type: WishlishActionTypes.REMOVE_WISHLIST,
  payload: item
});

export const clearWishlist = () => ({
  type: WishlishActionTypes.CLEAR_WISHLIST
});

export const restoreWishlist = items => ({
  type: WishlishActionTypes.RESTORE_WISHLIST,
  payload: items
});