import { RootState } from 'redux/types';

export const getPokemon = (state: RootState) => Object.values(state.pokemon)[0];
export const getPokemons = (state: RootState) => Object.values(state.pokemon);
