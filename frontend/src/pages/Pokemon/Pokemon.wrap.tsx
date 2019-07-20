import { PokemonInterface } from 'components/Pokemon/Pokemon';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchPokemonSuccess } from 'redux/Pokemon/actions';
import { getPokemon } from 'redux/Pokemon/selectors';
import { RootState } from 'redux/types';
import withDataFetching from '../../HOC/withDataFetching';
import { makeGetRequest } from '../../services/networking/request';
import Home, { Props } from './Pokemon';

const PokemonWithDataFetching = withDataFetching<Props>(
  'fetchPokemon',
  (props: Props) => makeGetRequest(`/pokemon/${props.match.params.id}`),
  (props: Props) => [props.match.params.id],
)(Home);

const mapStateToProps = (state: RootState) => ({
  pokemon: getPokemon(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPokemon: (pokemon: PokemonInterface) => dispatch(fetchPokemonSuccess(pokemon)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonWithDataFetching);
