import { call, put, takeEvery } from 'redux-saga/effects';
import { makeGetRequest } from 'services/networking/request';
import { ActionType, getType } from 'typesafe-actions';
import {
  fetchPokemonRequested,
  fetchPokemonsRequested,
  fetchPokemonsSuccess,
  fetchPokemonSuccess,
} from './actions';

function* fetchPokemon(action: ActionType<typeof fetchPokemonRequested>) {
  const { payload: id } = action;
  const url = `/pokemon/${id}`;
  const { body: pokemon } = yield call(makeGetRequest, url);
  yield put(fetchPokemonSuccess(pokemon));
}

function* fetchPokemons(action: ActionType<typeof fetchPokemonsRequested>) {
  const { body: pokemons } = yield call(makeGetRequest, '/pokemon');
  yield put(fetchPokemonsSuccess(pokemons));
}

export default function* pokemonSaga() {
  yield takeEvery(getType(fetchPokemonRequested), fetchPokemon);
  yield takeEvery(getType(fetchPokemonsRequested), fetchPokemons);
}
