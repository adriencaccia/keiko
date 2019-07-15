import { PokemonInterface } from 'components/Pokemon/Pokemon';
import { AnyAction } from 'redux';

export type PokemonState = Readonly<Record<string, PokemonInterface>>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  return state;
};

export default reducer;
