import { PokemonInterface } from 'components/Pokemon/Pokemon';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchPokemonSuccess } from 'redux/Pokemon/actions';
import { RootState } from 'redux/types';
import Home from './Home';

// const HomeWithDataFetching = withDataFetching<Props>(
//   'pokemons',
//   (props: Props) => makeGetRequest(`/pokemon?page=${props.match.params.page}`),
//   (props: Props) => [props.match.params.page],
// )(Home);

const mapStateToProps = (state: RootState) => ({
  pokemons: Object.values(state.pokemon),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPokemonSuccess: (pokemon: PokemonInterface) => dispatch(fetchPokemonSuccess(pokemon)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
