import WishlishActionTypes from './wishlist-types';

export const toggleMessageHidden = isHidden => ({
  type: WishlishActionTypes.TOGGLE_MESSAGE_HIDDEN,
  payload: isHidden
});

export const toggleWishlist = item => ({
  type: WishlishActionTypes.TOGGLE_WISHLIST,
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