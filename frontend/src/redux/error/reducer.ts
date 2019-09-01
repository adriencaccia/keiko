import { AnyAction } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import { ErrorActionParam, setError } from './actions';

export type ErrorAction = ActionType<typeof setError>;

export type ErrorState = Readonly<Record<string, string>>;

const initialState: ErrorState = {};

const reducer = (state: ErrorState = initialState, action: AnyAction) => {
  const typedAction = action as ErrorAction;
  switch (typedAction.type) {
    case getType(setError):
      const {
        payload: { actionName, error },
      }: { payload: ErrorActionParam } = typedAction;
      return {
        ...state,
        [actionName]: error,
      };
  }
  return state;
};

export default reducer;
