// @flow
const prefix = (value: string): string => `persist/${value}`;

export const REHYDRATE = prefix('REHYDRATE');
