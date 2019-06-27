import Pokemon from 'components/Pokemon';
import * as React from 'react';
import { makeGetRequest } from 'services/networking/request';
import Style from './Home.style';

interface Props {}
interface State {
  pokemons: Array<{
    id: number;
    name: string;
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
    const pokemon = this.state.pokemons && this.state.pokemons[0];
    return (
      <Style.Intro>
        {pokemon && <Pokemon name={pokemon.name} id={pokemon.id} />}
        <Pokemon name="Carapuce" id={7} />
        <Pokemon name="Carabaffe" id={8} />
        <Pokemon name="Tortank" id={9} />
      </Style.Intro>
    );
  }
}

export default Home;
