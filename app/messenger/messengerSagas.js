// @flow
import {all, fork, put, delay, select, takeLatest} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import {
  LOAD_SEED_MESSAGES,
  LOAD_SEED_MESSAGES_REQUEST,
  LOAD_SEED_MESSAGES_SUCCESS,
} from './messengerActions';
import {REHYDRATE} from '../rootActions';

import {getHasSeededMessagesBefore} from './messengerSelectors';

import seedMessageData from './messengerSeedData';

function* doSeedMessenger(): Saga<void> {
  yield put({type: LOAD_SEED_MESSAGES_REQUEST});
  // pretend this is a network request, thus introduce artificial delay
  yield delay(2000);
  yield put({type: LOAD_SEED_MESSAGES_SUCCESS, messages: seedMessageData});
}

function* doCheckMessengerSeedData(): Saga<void> {
  const hasSeededMessagesBefore = yield select(getHasSeededMessagesBefore);
  if (!hasSeededMessagesBefore) {
    yield put({type: LOAD_SEED_MESSAGES});
  }
}

function* watchSeedMessengerRequest(): Saga<void> {
  yield takeLatest(LOAD_SEED_MESSAGES, doSeedMessenger);
}

function* watchReduxStoreRehydration(): Saga<void> {
  yield takeLatest(REHYDRATE, doCheckMessengerSeedData);
}

export default function* messengerRoot(): Saga<void> {
  yield all([
    fork(watchReduxStoreRehydration),
    fork(watchSeedMessengerRequest),
  ]);
}
