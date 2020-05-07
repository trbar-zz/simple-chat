// @flow

const prefix = (value: string): string => `messenger/${value}`;

export const LOAD_MESSAGES_REQUEST = prefix('LOAD_MESSAGES_REQUEST');
export const LOAD_MESSAGES_SUCCESS = prefix('LOAD_MESSAGES_SUCCESS');
export const LOAD_MESSAGES_FAILURE = prefix('LOAD_MESSAGES_FAILURE');

export const APPEND_MESSAGES = prefix('APPEND_MESSAGES');

export const appendMessage = (newMessages: any) => ({
  type: APPEND_MESSAGES,
  newMessages,
});
