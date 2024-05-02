import { all, call, takeLatest, put } from 'redux-saga/effects';

import { clearWishlist } from './wishlist-slice';
import { signOutSuccess } from '../user/user-slice';

export function* clearWishlistOnSignOut() {
  yield put(clearWishlist());
}

export function* onSignOutSuccess() {
  yield takeLatest(signOutSuccess.type, clearWishlistOnSignOut);
}

export function* wishlistSagas() {
  yield all([call(onSignOutSuccess)]);
}