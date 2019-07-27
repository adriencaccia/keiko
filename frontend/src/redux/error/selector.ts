import { RootState } from 'redux/types';

export const getError = (state: RootState, actionName: string) => state.error[actionName];
