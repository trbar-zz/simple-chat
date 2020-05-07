// @flow

import {fork, all} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import messengerRoot from './messenger/messengerSagas';

export default function* rootSaga(): Saga<void> {
  yield all([fork(messengerRoot)]);
}
