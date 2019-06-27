import Pokemon from 'components/Pokemon';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeGetRequest } from 'services/networking/request';
import Style from './Home.style';

interface Props {}
interface State {
  pokemons: Array<{
    id: number;
    name: string;
    height: string;
    weight: string;
  }>;
}

class Home extends React.Component<Props, State> {
  state: State = {
    pokemons: [],
  };

  async componentDidMount() {
    const { body: pokemons } = await makeGetRequest('/pokemon');
    this.setState({ pokemons });
  }
  render(): React.ReactNode {
    const { pokemons } = this.state;
    return (
      <Style.Container>
        <Style.Title>
          <FormattedMessage id="home.title" />
        </Style.Title>
        <Style.Grid>
          {pokemons.map(pokemon => (
            <Pokemon {...pokemon} key={pokemon.id} />
          ))}
        </Style.Grid>
      </Style.Container>
    );
  }
}

export default Home;
