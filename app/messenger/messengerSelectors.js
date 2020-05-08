// @flow
import type {AppState} from '../types';

export const getHasSeededMessagesBefore = (state: AppState): boolean =>
  state.messenger.hasSeededMessagesBefore;
