import { call, put, takeEvery } from 'redux-saga/effects';
import { makeGetRequest } from 'services/networking/request';
import { ActionType, getType } from 'typesafe-actions';
import { fetchPokemonsRequested, fetchPokemonsSuccess } from './actions';

function* fetchPokemons(action: ActionType<typeof fetchPokemonsRequested>) {
  const { body: pokemons } = yield call(makeGetRequest, '/pokemon');
  yield put(fetchPokemonsSuccess(pokemons));
}

export default function* pokemonSaga() {
  yield takeEvery(getType(fetchPokemonsRequested), fetchPokemons);
}
