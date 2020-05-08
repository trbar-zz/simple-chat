// @flow

import type {MessengerState} from './types';
import {
  LOAD_SEED_MESSAGES_REQUEST,
  LOAD_SEED_MESSAGES_SUCCESS,
  LOAD_SEED_MESSAGES_FAILURE,
  APPEND_MESSAGES,
} from './messengerActions';

const initialState = {
  isLoading: false,
  messages: [],
  error: null,
  hasSeededMessagesBefore: false,
};

const messengerReducer = (
  state: MessengerState = initialState,
  action: any,
): MessengerState => {
  switch (action.type) {
    case LOAD_SEED_MESSAGES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOAD_SEED_MESSAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: action.messages.reverse(),
        hasSeededMessagesBefore: true,
      };
    case LOAD_SEED_MESSAGES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case APPEND_MESSAGES:
      return {
        ...state,
        messages: state.messages.concat(action.newMessages),
      };
    default:
      return state;
  }
};

export default messengerReducer;
