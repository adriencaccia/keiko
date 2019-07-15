import { PokemonInterface } from 'components/Pokemon/Pokemon';
import { createStandardAction } from 'typesafe-actions';

export const fetchPokemonSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<
  PokemonInterface
>();

export default { fetchPokemonSuccess };
