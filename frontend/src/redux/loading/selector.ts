import { RootState } from 'redux/types';

export const getLoading = (state: RootState, actionName: string) => state.loading[actionName];
