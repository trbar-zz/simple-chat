// @flow

import type {MessengerState} from './types';
import {
  LOAD_MESSAGES_REQUEST,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
  APPEND_MESSAGES,
} from './messengerActions';

const initialState = {
  isLoading: false,
  messages: [],
  error: null,
};

const messengerReducer = (
  state: MessengerState = initialState,
  action: any,
): MessengerState => {
  switch (action.type) {
    case LOAD_MESSAGES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOAD_MESSAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: action.messages.reverse(),
      };
    case LOAD_MESSAGES_FAILURE:
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
