import { PokemonInterface } from 'components/Pokemon/Pokemon';
import { normalize } from 'services/PokemonNormalizer';

const pokemonArray = [
  { id: 1, name: 'bulbasaur', height: 7, weight: 69 },
  { id: 2, name: 'ivysaur', height: 10, weight: 130 },
];

const normalizedPokemons = {
  1: { id: 1, name: 'bulbasaur', height: 7, weight: 69 },
  2: { id: 2, name: 'ivysaur', height: 10, weight: 130 },
};

describe('Pokemon normalizer', () => {
  describe('empty array case', () => {
    it('Should return an empty object', () => {
      expect(normalize([])).toEqual({});
    });
  });

  describe('filled array case', () => {
    it('Should return a filled object', () => {
      const pokemons = normalize(pokemonArray);
      expect(pokemons).toEqual(normalizedPokemons);
    });
  });
});
