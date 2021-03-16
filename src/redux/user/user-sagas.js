import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user-types';

import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from './user-actions';

import { auth, googleProvider, facebookProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const UserRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield UserRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* userSagas() {

}