import { AnyAction } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import { LoadingActionParam, setLoading } from './actions';

export type LoadingAction = ActionType<typeof setLoading>;

export type LoadingState = Readonly<Record<string, boolean>>;

const initialState: LoadingState = {};

const reducer = (state: LoadingState = initialState, action: AnyAction) => {
  const typedAction = action as LoadingAction;
  switch (typedAction.type) {
    case getType(setLoading):
      const {
        payload: { actionName, loading },
      }: { payload: LoadingActionParam } = typedAction;
      return {
        ...state,
        [actionName]: loading,
      };
  }
  return state;
};

export default reducer;
