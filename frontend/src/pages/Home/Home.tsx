import Pokemon from 'components/Pokemon';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeGetRequest } from 'services/networking/request';
import Style from './Home.style';

interface Props {}
interface State {
  loading: boolean;
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
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { body: pokemons } = await makeGetRequest('/pokemon');
    this.setState({ pokemons, loading: false });
  }
  render(): React.ReactNode {
    const { pokemons, loading } = this.state;
    return (
      <Style.Container>
        <Style.Title>
          <FormattedMessage id="home.title" />
        </Style.Title>
        {loading ? (
          <Style.Loader src="https://trello-attachments.s3.amazonaws.com/5d0ce56e059f0263f02e0155/5d0ce56e059f0263f02e016f/x/f020b178de9e22691149d450613f8f52/loader.svg" />
        ) : (
          <Style.Grid>
            {pokemons.map(pokemon => (
              <Pokemon {...pokemon} key={pokemon.id} />
            ))}
          </Style.Grid>
        )}
      </Style.Container>
    );
  }
}

export default Home;
