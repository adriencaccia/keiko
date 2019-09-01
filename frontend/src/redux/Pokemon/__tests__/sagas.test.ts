import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { setError } from 'redux/error/actions';
import { setLoading } from 'redux/loading/actions';
import { makeGetRequest } from 'services/networking/request';
import { ActionType, getType } from 'typesafe-actions';
import {
  fetchPokemonRequested,
  fetchPokemonsRequested,
  fetchPokemonsSuccess,
  fetchPokemonSuccess,
} from '../actions';
import { fetchPokemon, fetchPokemons } from '../sagas';

const pokemonArray = [
  { id: 1, name: 'bulbasaur', height: 7, weight: 69 },
  { id: 2, name: 'ivysaur', height: 10, weight: 130 },
];

const fetchPokemonAction: ActionType<typeof fetchPokemonRequested> = fetchPokemonRequested(1);
const fetchPokemonsAction: ActionType<typeof fetchPokemonsRequested> = fetchPokemonsRequested(1);

describe('[Saga] Login redux', () => {
  describe('fetchPokemon', () => {
    describe('when request is a success', () => {
      it('should call the success action when request is a success', async () => {
        return expectSaga(fetchPokemon, fetchPokemonAction)
          .provide([[matchers.call.fn(makeGetRequest), { body: pokemonArray[0] }]])
          .put(setLoading({ actionName: fetchPokemonAction.type, loading: true }))
          .put(fetchPokemonSuccess(pokemonArray[0]))
          .put(setLoading({ actionName: fetchPokemonAction.type, loading: false }))
          .run();
      });
    });

    describe('when request fails', () => {
      it('should call the error action', async () => {
        const error = new Error();
        return expectSaga(fetchPokemon, fetchPokemonAction)
          .provide([[matchers.call.fn(makeGetRequest), throwError(error)]])
          .put(setError({ actionName: getType(fetchPokemonRequested), error: 'Error' }))
          .not.put.actionType(getType(fetchPokemonSuccess))
          .run();
      });
    });
  });
  describe('fetchPokemons', () => {
    describe('when request is a success', () => {
      it('should call the success action when request is a success', async () => {
        return expectSaga(fetchPokemons, fetchPokemonsAction)
          .provide([[matchers.call.fn(makeGetRequest), { body: pokemonArray }]])
          .put(setLoading({ actionName: fetchPokemonsAction.type, loading: true }))
          .put(fetchPokemonsSuccess(pokemonArray))
          .put(setLoading({ actionName: fetchPokemonsAction.type, loading: false }))
          .run();
      });
    });

    describe('when request fails', () => {
      it('should call the error action', async () => {
        const error = new Error();
        return expectSaga(fetchPokemons, fetchPokemonsAction)
          .provide([[matchers.call.fn(makeGetRequest), throwError(error)]])
          .put(setError({ actionName: getType(fetchPokemonsRequested), error: 'Error' }))
          .not.put.actionType(getType(fetchPokemonsSuccess))
          .run();
      });
    });
  });
});
