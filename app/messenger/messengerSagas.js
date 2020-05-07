// @flow
import {all, fork, put, delay} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import {LOAD_MESSAGES_REQUEST, LOAD_MESSAGES_SUCCESS} from './messengerActions';

import seedMessageData from './messengerSeedData';

function* loadMessages(): Saga<void> {
  yield put({type: LOAD_MESSAGES_REQUEST});
  yield delay(2000);
  yield put({type: LOAD_MESSAGES_SUCCESS, messages: seedMessageData});
}

export default function* messengerRoot(): Saga<void> {
  yield all([fork(loadMessages)]);
}
