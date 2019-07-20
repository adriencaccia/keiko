import { PokemonInterface } from 'components/Pokemon/Pokemon';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchPokemonsSuccess } from 'redux/Pokemon/actions';
import { getPokemons } from 'redux/Pokemon/selectors';
import { RootState } from 'redux/types';
import { makeGetRequest } from 'services/networking/request';
import withDataFetching from '../../HOC/withDataFetching';
import Home, { Props } from './Home';

const HomeWithDataFetching = withDataFetching<Props>(
  'fetchPokemons',
  (props: Props) => makeGetRequest(`/pokemon?page=${props.match.params.page}`),
  (props: Props) => [props.match.params.page],
)(Home);

const mapStateToProps = (state: RootState) => ({
  pokemons: getPokemons(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPokemons: (pokemons: PokemonInterface[]) => dispatch(fetchPokemonsSuccess(pokemons)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeWithDataFetching);
