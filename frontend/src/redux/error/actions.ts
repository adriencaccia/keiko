import { createStandardAction } from 'typesafe-actions';

export interface ErrorActionParam {
  actionName: string;
  error: string;
}

export const setError = createStandardAction('error/SET_ERROR')<ErrorActionParam>();
