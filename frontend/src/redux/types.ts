import { LoadingState } from './loading';
import { LoginAction, LoginState } from './Login';
import { PokemonState } from './Pokemon';

export type RootState = Readonly<{
  login: LoginState;
  pokemon: PokemonState;
  loading: LoadingState;
}>;
export type RootAction = LoginAction;
