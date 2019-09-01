import { PokemonInterface } from 'components/Pokemon/Pokemon';
import { createStandardAction } from 'typesafe-actions';

export const fetchPokemonRequested = createStandardAction('Pokemon/FETCH_POKEMON_REQUESTED')<
  number
>();

export const fetchPokemonsRequested = createStandardAction('Pokemon/FETCH_POKEMONS_REQUESTED')<
  number
>();

export const fetchPokemonSuccess = createStandardAction('Pokemon/FETCH_POKEMON_SUCCESS')<
  PokemonInterface
>();

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<
  PokemonInterface[]
>();
