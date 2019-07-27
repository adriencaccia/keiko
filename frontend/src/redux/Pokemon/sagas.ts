import { ActionSheetIOS } from 'react-native';
import { call, put, takeEvery } from 'redux-saga/effects';
import { setLoading } from 'redux/loading/actions';
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
  yield put(setLoading({ actionName: action.type, loading: true }));
  const { body: pokemon } = yield call(makeGetRequest, url);
  yield put(fetchPokemonSuccess(pokemon));
  yield put(setLoading({ actionName: action.type, loading: false }));
}

function* fetchPokemons(action: ActionType<typeof fetchPokemonsRequested>) {
  yield put(setLoading({ actionName: action.type, loading: true }));
  const { body: pokemons } = yield call(makeGetRequest, '/pokemon');
  yield put(fetchPokemonsSuccess(pokemons));
  yield put(setLoading({ actionName: action.type, loading: false }));
}

export default function* pokemonSaga() {
  yield takeEvery(getType(fetchPokemonRequested), fetchPokemon);
  yield takeEvery(getType(fetchPokemonsRequested), fetchPokemons);
}
