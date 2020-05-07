// @flow
import {combineReducers} from 'redux';
import messengerReducer from './messenger/messengerReducer';

import type {AppState} from './types';

// The input state is untyped so we can re-initialize easily
type AppReducer = (state: any, action: any) => AppState;

const rootReducer: AppReducer = combineReducers({
  messenger: messengerReducer,
});

export default rootReducer;
