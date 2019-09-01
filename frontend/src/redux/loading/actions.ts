import { createStandardAction } from 'typesafe-actions';

export interface LoadingActionParam {
  actionName: string;
  loading: boolean;
}

export const setLoading = createStandardAction('loading/SET_ACTION')<LoadingActionParam>();
