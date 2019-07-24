import { PokemonInterface } from 'components/Pokemon/Pokemon';
import { fetchPokemonsSuccess, fetchPokemonSuccess } from '../actions';
import reducer from '../reducer';

const initialState = {};
const pokemonArray = [
  { id: 1, name: 'bulbasaur', height: 7, weight: 69 },
  { id: 2, name: 'ivysaur', height: 10, weight: 130 },
];

const pokemonState = {
  1: { id: 1, name: 'bulbasaur', height: 7, weight: 69 },
  2: { id: 2, name: 'ivysaur', height: 10, weight: 130 },
};

describe('Pokemon reducer', () => {
  describe('FETCH_POKEMON_SUCCESS case', () => {
    it('Should return an initial state with a single pokemon', () => {
      const pokemon = pokemonArray[0];
      const action = fetchPokemonSuccess(pokemon);
      const expectedState = { ...initialState, [pokemon.id]: pokemon };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('FETCH_POKEMONS_SUCCESS case', () => {
    it('Should return an initial state with multiple pokemons', () => {
      const action = fetchPokemonsSuccess(pokemonArray);
      const state = reducer(initialState, action);
      expect(state).toEqual(pokemonState);
    });
  });
});
