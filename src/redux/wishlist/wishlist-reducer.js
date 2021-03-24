import WishlistActionTypes from './wishlist-types';
import { addItemtoWishlist, mergeCurrentAndStoredWishlist } from './wishlist.utils';

const INITIAL_STATE = {
  wishlistItems: []
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishlistActionTypes.ADD_WISHLIST:
      return {
        ...state,
        wishlistItems: addItemtoWishlist(state.wishlistItems, action.payload)
      };
    case WishlistActionTypes.REMOVE_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          wishlistItem => wishlistItem.id !== action.payload.id
        )
      };
    case WishlistActionTypes.CLEAR_WISHLIST:
      return {
        ...state,
        wishlistItems: []
      };
    case WishlistActionTypes.RESTORE_WISHLIST:
      return {
        ...state,
        wishlistItems: mergeCurrentAndStoredWishlist(state.wishlistItems, action.payload)
      };
    default:
      return state;
  }
};

export default wishlistReducer;