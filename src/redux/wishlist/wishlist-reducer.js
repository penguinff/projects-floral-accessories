import WishlistActionTypes from './wishlist-types';
import { toggleItemtoWishlist, mergeCurrentAndStoredWishlist } from './wishlist.utils';

const INITIAL_STATE = {
  hidden: true,
  wishlistItems: []
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishlistActionTypes.TOGGLE_MESSAGE_HIDDEN:
      return {
        ...state,
        hidden: action.payload
      };
    case WishlistActionTypes.TOGGLE_WISHLIST:
      return {
        ...state,
        wishlistItems: toggleItemtoWishlist(state.wishlistItems, action.payload)
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