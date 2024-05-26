import { takeLatest, put, all, call } from 'redux-saga/effects';

import { googleSignInStart, facebookSignInStart, emailSignInStart, signInSuccess, signInFailure, checkUserSession, signOutStart, signOutSuccess, signOutFailure, signUpStart, signUpSuccess, signUpFailure } from './user-slice';
import { restoreCart } from '../cart/cart-slice';
import { restoreWishlist } from '../wishlist/wishlist-slice';

import { auth, googleProvider, facebookProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithFacebook() {
  try {
    const { user } = yield auth.signInWithPopup(facebookProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* restoreCartAndWishlistAfterSignIn({ payload: { storedCart, storedWishlist }}) {
  yield put(restoreCart(storedCart));
  yield put(restoreWishlist(storedWishlist));
}

export function* onGoogleSignInStart() {
  yield takeLatest(googleSignInStart.type, signInWithGoogle);
}

export function* onFacebookSignInStart() {
  yield takeLatest(facebookSignInStart.type, signInWithFacebook);
}

export function* onEmailSignInStart() {
  yield takeLatest(emailSignInStart.type, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(checkUserSession.type, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(signOutStart.type, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(signUpStart.type, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(signUpSuccess.type, signInAfterSignUp);
}

export function* onSignInSuccess() {
  yield takeLatest(signInSuccess.type, restoreCartAndWishlistAfterSignIn);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onFacebookSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignInSuccess)
  ]);
}