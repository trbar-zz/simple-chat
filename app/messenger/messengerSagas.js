// @flow
import {all} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

export default function* messengerRoot(): Saga<void> {
  yield all([]);
}
