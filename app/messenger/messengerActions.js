// @flow
const prefix = (value: string): string => `messenger/${value}`;

export const LOAD_SEED_MESSAGES = prefix('LOAD_SEED_MESSAGES');
export const LOAD_SEED_MESSAGES_REQUEST = prefix('LOAD_SEED_MESSAGES_REQUEST');
export const LOAD_SEED_MESSAGES_SUCCESS = prefix('LOAD_SEED_MESSAGES_SUCCESS');
export const LOAD_SEED_MESSAGES_FAILURE = prefix('LOAD_SEED_MESSAGES_FAILURE');

export const APPEND_MESSAGES = prefix('APPEND_MESSAGES');

export const appendMessage = (newMessages: any) => ({
  type: APPEND_MESSAGES,
  newMessages,
});
