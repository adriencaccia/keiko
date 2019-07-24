import { state } from '__fixtures__/state';
import { getPokemon, getPokemons } from '../selectors';

const pokemonArray = [
  { id: 1, name: 'bulbasaur', height: 7, weight: 69 },
  { id: 2, name: 'ivysaur', height: 10, weight: 130 },
];
const pokemonState = {
  1: { id: 1, name: 'bulbasaur', height: 7, weight: 69 },
  2: { id: 2, name: 'ivysaur', height: 10, weight: 130 },
};
const initialState = { ...state, login: { token: null, loginError: null }, pokemon: pokemonState };

describe('Pokemon selectors', () => {
  describe('getPokemon function', () => {
    it('Should return the first pokemon stored in store.pokemon', () => {
      const pokemon = { id: 1, name: 'bulbasaur', height: 7, weight: 69 };
      expect(getPokemon(initialState)).toEqual(pokemon);
    });
  });
  describe('getPokemons function', () => {
    it('Should return an array of pokemons stored in store.pokemons', () => {
      expect(getPokemons(initialState)).toEqual(pokemonArray);
    });
  });
});
