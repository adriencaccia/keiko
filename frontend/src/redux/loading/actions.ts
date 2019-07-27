import { createStandardAction } from 'typesafe-actions';

export interface LoadingActionParam {
  actionName: string;
  loading: boolean;
}

export const setLoading = createStandardAction('Loading/SET_ACTION')<LoadingActionParam>();
