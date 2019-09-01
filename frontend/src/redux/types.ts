import { ErrorState } from './error';
import { LoadingState } from './loading';
import { LoginAction, LoginState } from './Login';
import { PokemonState } from './Pokemon';

export type RootState = Readonly<{
  error: ErrorState;
  loading: LoadingState;
  login: LoginState;
  pokemon: PokemonState;
}>;
export type RootAction = LoginAction;
