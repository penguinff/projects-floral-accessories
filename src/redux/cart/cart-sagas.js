import { all, call, takeLatest, put } from 'redux-saga/effects';

import { clearCart } from './cart-slice';
import { signOutSuccess } from '../user/user-slice';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(signOutSuccess.type, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}