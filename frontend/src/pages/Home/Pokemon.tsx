import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router';
import { makeGetRequest } from 'services/networking/request';
import Style from './Pokemon.style';

interface Props extends RouteComponentProps<{ id: string }> {}
interface State {
  loading: boolean;
  pokemon: {
    id: number;
    name: string;
    height: string;
    weight: string;
  };
  error: string;
}

const Pokemon = (props: Props) => {
  const { id } = props.match.params;
  const [loading, setLoading] = useState<State['loading']>(false);
  const [pokemon, setPokemon] = useState<State['pokemon']>({} as State['pokemon']);
  const [error, setError] = useState<State['error']>('');
  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      let fetchedPokemon = {} as State['pokemon'];
      try {
        const response = await makeGetRequest(`/pokemon/${id}`);
        fetchedPokemon = response.body;
      } catch (caughtError) {
        setError(caughtError.toString());
        setLoading(false);
      }
      setPokemon(fetchedPokemon);
      setLoading(false);
    }
    fetchPokemon();
  }, [id]);
  const baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  const urls = ['', 'back/', 'shiny/', 'back/shiny/'].map(str => `${baseSpriteUrl + str + id}.png`);
  const { height, weight } = pokemon;
  return (
    <Style.Container>
      {loading ? (
        <Style.Loader
          alt="loader"
          src="https://trello-attachments.s3.amazonaws.com/5d0ce56e059f0263f02e0155/5d0ce56e059f0263f02e016f/x/f020b178de9e22691149d450613f8f52/loader.svg"
        />
      ) : error ? (
        <Style.Error>
          Oh no !<br /> The following error happened:
          <br /> {error}
        </Style.Error>
      ) : (
        <Style.Info>
          <Style.Title>{pokemon.name}</Style.Title>
          <Style.Grid>
            {urls.map((url, i) => (
              <Style.Image src={url} key={i} alt="pokemon" />
            ))}
          </Style.Grid>
          <div>
            <div>
              <FormattedMessage id="pokemon.height" />: {height}
            </div>
            <div>
              <FormattedMessage id="pokemon.weight" />: {weight}
            </div>
            <div>
              <FormattedMessage id="pokemon.id" />: {id}
            </div>
          </div>
        </Style.Info>
      )}
    </Style.Container>
  );
};

export default Pokemon;
