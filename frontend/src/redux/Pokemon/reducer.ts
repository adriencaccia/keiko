import { PokemonInterface } from 'components/Pokemon/Pokemon';
import { AnyAction } from 'redux';
import { normalize } from 'services/PokemonNormalizer';
import { ActionType, getType } from 'typesafe-actions';
import { fetchPokemonsSuccess, fetchPokemonSuccess } from './actions';

export type PokemonAction = ActionType<typeof fetchPokemonSuccess | typeof fetchPokemonsSuccess>;

export type PokemonState = Readonly<Record<string, PokemonInterface>>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  const typedAction = action as PokemonAction;
  switch (typedAction.type) {
    case getType(fetchPokemonSuccess):
      return {
        ...normalize([typedAction.payload]),
      };
    case getType(fetchPokemonsSuccess):
      return {
        ...normalize(typedAction.payload),
      };
  }
  return state;
};

export default reducer;
