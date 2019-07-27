import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getLoading } from 'redux/loading/selector';
import { fetchPokemonsRequested } from 'redux/Pokemon/actions';
import { getPokemons } from 'redux/Pokemon/selectors';
import { RootState } from 'redux/types';
import { getType } from 'typesafe-actions';
import withDataFetching from '../../HOC/withDataFetching';
import Home, { Props } from './Home';

const HomeWithDataFetching = withDataFetching<Props>(
  (props: Props) => [props.match.params.page],
  'pokemons',
)(Home);

const mapStateToProps = (state: RootState) => ({
  pokemons: getPokemons(state),
  loading: getLoading(state, getType(fetchPokemonsRequested)),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  requestData: () => dispatch(fetchPokemonsRequested()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeWithDataFetching);
