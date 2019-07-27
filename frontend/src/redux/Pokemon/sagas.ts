import { takeEvery } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';
import { fetchPokemonsRequested } from './actions';

function* fetchPokemons(action: ActionType<typeof fetchPokemonsRequested>) {
  console.log('I have been called!');
  yield 'hello';
}

export default function* pokemonSaga() {
  yield takeEvery(getType(fetchPokemonsRequested), fetchPokemons);
}
