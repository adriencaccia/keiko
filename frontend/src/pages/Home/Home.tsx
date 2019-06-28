import Pokemon from 'components/Pokemon';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router';
import { makeGetRequest } from 'services/networking/request';
import Style from './Home.style';

interface Props extends RouteComponentProps<{ page: string }> {}

interface State {
  loading: boolean;
  pokemons: Array<{
    id: number;
    name: string;
    height: string;
    weight: string;
  }>;
  error: string;
}

const Home = (props: Props) => {
  const { page } = props.match.params;
  const [loading, setLoading] = useState<State['loading']>(false);
  const [pokemons, setPokemons] = useState<State['pokemons']>([]);
  const [error, setError] = useState<State['error']>('');
  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      let fetchedPokemons: Array<{
        id: number;
        name: string;
        height: string;
        weight: string;
      }> = [];
      try {
        const response = await makeGetRequest(`/pokemon?page=${page}`);
        fetchedPokemons = response.body;
      } catch (caughtError) {
        setError(caughtError.toString());
        setLoading(false);
      }
      setPokemons(fetchedPokemons);
      setLoading(false);
    }
    fetchPokemons();
  }, [page]);
  const pageInt = parseInt(page, 10);
  const navigation = (pageNumber: number) => (pageNumber <= 0 ? 1 : pageNumber);
  return (
    <Style.Container>
      <Style.Title>
        <FormattedMessage id="home.title" />
      </Style.Title>
      {loading ? (
        <Style.Loader src="https://trello-attachments.s3.amazonaws.com/5d0ce56e059f0263f02e0155/5d0ce56e059f0263f02e016f/x/f020b178de9e22691149d450613f8f52/loader.svg" />
      ) : error ? (
        <Style.Error>
          Oh no !<br /> The following error happened:
          <br /> {error}
        </Style.Error>
      ) : (
        <div>
          <Style.NavigationContainer>
            <Style.Navigation to={`/pokedex/${navigation(pageInt - 1)}`}>{'<'}</Style.Navigation>
            <Style.Navigation to={`/pokedex/${navigation(pageInt + 1)}`}>{'>'}</Style.Navigation>
          </Style.NavigationContainer>
          <Style.Grid>
            {pokemons.map(pokemon => (
              <Pokemon {...pokemon} key={pokemon.id} />
            ))}
          </Style.Grid>
        </div>
      )}
    </Style.Container>
  );
};

export default Home;
