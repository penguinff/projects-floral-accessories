import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsStart ,fetchCollectionsSuccess, fetchCollectionsFailure } from './shop-slice';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(fetchCollectionsStart.type, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}