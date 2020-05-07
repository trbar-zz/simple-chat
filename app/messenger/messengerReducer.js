// @flow

import type {MessengerState} from './types';

const initialState = {
  isLoading: false,
  messages: [],
};

const messengerReducer = (
  state: MessengerState = initialState,
  action: any,
): MessengerState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default messengerReducer;
