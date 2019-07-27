import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchPokemonRequested } from 'redux/Pokemon/actions';
import { getPokemon } from 'redux/Pokemon/selectors';
import { RootState } from 'redux/types';
import withDataFetching from '../../HOC/withDataFetching';
import { makeGetRequest } from '../../services/networking/request';
import Pokemon, { Props } from './Pokemon';

const PokemonWithDataFetching = withDataFetching<Props>(
  (props: Props) => makeGetRequest(`/pokemon/${props.match.params.id}`),
  (props: Props) => [props.match.params.id],
)(Pokemon);

const mapStateToProps = (state: RootState) => ({
  pokemon: getPokemon(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  requestData: (id: number) => dispatch(fetchPokemonRequested(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonWithDataFetching);
