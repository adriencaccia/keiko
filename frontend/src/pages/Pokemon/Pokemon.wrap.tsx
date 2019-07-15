import withDataFetching from '../../HOC/withDataFetching';
import { makeGetRequest } from '../../services/networking/request';
import Home, { Props } from './Pokemon';

const PokemonWithDataFetching = withDataFetching<Props>(
  'pokemon',
  (props: Props) => makeGetRequest(`/pokemon/${props.match.params.id}`),
  (props: Props) => [props.match.params.id],
)(Home);

export default PokemonWithDataFetching;
