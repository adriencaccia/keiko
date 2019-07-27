import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getError } from 'redux/error/selector';
import { getLoading } from 'redux/loading/selector';
import { fetchPokemonRequested } from 'redux/Pokemon/actions';
import { getPokemon } from 'redux/Pokemon/selectors';
import { RootState } from 'redux/types';
import { getType } from 'typesafe-actions';
import withDataFetching from '../../HOC/withDataFetching';
import Pokemon, { Props } from './Pokemon';

const PokemonWithDataFetching = withDataFetching<Props>(
  (props: Props) => [props.match.params.id],
  'pokemon',
)(Pokemon);

const mapStateToProps = (state: RootState) => ({
  pokemon: getPokemon(state),
  error: getError(state, getType(fetchPokemonRequested)),
  loading: getLoading(state, getType(fetchPokemonRequested)),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  requestData: (id: number) => dispatch(fetchPokemonRequested(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonWithDataFetching);
