import Pokemon from 'components/Pokemon';
import { PokemonInterface } from 'components/Pokemon/Pokemon';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router';
import { PayloadAction } from 'typesafe-actions';
import Style from './Home.style';

export interface Props extends RouteComponentProps<{ page: string }> {
  pokemons: PokemonInterface[];
  fetchPokemonSuccess: (pokemon: any) => any;
}

const Home = (props: Props) => {
  const page = props.match.params.page;
  const { pokemons } = props;
  props.fetchPokemonSuccess({});
  const pageInt = parseInt(page, 10);
  const navigation = (pageNumber: number) => (pageNumber <= 0 ? 1 : pageNumber);
  return (
    <div>
      <Style.Title>
        <FormattedMessage id="home.title" />
      </Style.Title>
      <Style.NavigationContainer>
        <Style.Navigation to={`/pokedex/${navigation(pageInt - 1)}`}>{'<'}</Style.Navigation>
        <Style.Navigation to={`/pokedex/${navigation(pageInt + 1)}`}>{'>'}</Style.Navigation>
      </Style.NavigationContainer>
      <Style.Grid>
        {pokemons.map((pokemon: any) => (
          <Pokemon {...pokemon} key={pokemon.id} />
        ))}
      </Style.Grid>
    </div>
  );
};

export default Home;
