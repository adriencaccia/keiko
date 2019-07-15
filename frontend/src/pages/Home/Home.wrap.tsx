import { connect } from 'react-redux';
import { RootState } from 'redux/types';
import withDataFetching from '../../HOC/withDataFetching';
import { makeGetRequest } from '../../services/networking/request';
import Home, { Props } from './Home';

// const HomeWithDataFetching = withDataFetching<Props>(
//   'pokemons',
//   (props: Props) => makeGetRequest(`/pokemon?page=${props.match.params.page}`),
//   (props: Props) => [props.match.params.page],
// )(Home);

const mapStateToProps = (state: RootState) => ({
  pokemons: Object.values(state.pokemon),
});

export default connect(mapStateToProps)(Home);
