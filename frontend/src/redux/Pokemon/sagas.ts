import { call, put, takeEvery } from 'redux-saga/effects';
import { setError } from 'redux/error/actions';
import { setLoading } from 'redux/loading/actions';
import { makeGetRequest } from 'services/networking/request';
import { ActionType, getType } from 'typesafe-actions';
import {
  fetchPokemonRequested,
  fetchPokemonsRequested,
  fetchPokemonsSuccess,
  fetchPokemonSuccess,
} from './actions';

export function* fetchPokemon(action: ActionType<typeof fetchPokemonRequested>) {
  yield put(setLoading({ actionName: action.type, loading: true }));
  const { payload: id } = action;
  const url = `/pokemon/${id}`;
  try {
    const { body: pokemon } = yield call(makeGetRequest, url);
    yield put(fetchPokemonSuccess(pokemon));
  } catch (error) {
    yield put(setError({ actionName: action.type, error: error.toString() }));
  }
  yield put(setLoading({ actionName: action.type, loading: false }));
}

export function* fetchPokemons(action: ActionType<typeof fetchPokemonsRequested>) {
  yield put(setLoading({ actionName: action.type, loading: true }));
  const { payload: page } = action;
  const url = `/pokemon?page=${page}`;
  try {
    const { body: pokemons } = yield call(makeGetRequest, url);
    yield put(fetchPokemonsSuccess(pokemons));
  } catch (error) {
    yield put(setError({ actionName: action.type, error: error.toString() }));
  }
  yield put(setLoading({ actionName: action.type, loading: false }));
}

export default function* pokemonSaga() {
  yield takeEvery(getType(fetchPokemonRequested), fetchPokemon);
  yield takeEvery(getType(fetchPokemonsRequested), fetchPokemons);
}
