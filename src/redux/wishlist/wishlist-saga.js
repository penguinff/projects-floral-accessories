import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user-types';
import { clearWishlist } from './wishlist-actions';

export function* clearWishlistOnSignOut() {
  yield put(clearWishlist());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearWishlistOnSignOut);
}

export function* wishlistSagas() {
  yield all([call(onSignOutSuccess)]);
}