import { PokemonInterface } from 'components/Pokemon/Pokemon';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router';
import Style from './Pokemon.style';

export interface Props extends RouteComponentProps<{ id: string }> {
  pokemon: PokemonInterface;
}

const Pokemon = (props: Props) => {
  const id = props.match.params.id;
  const { pokemon } = props;
  if (!pokemon) {
    return <div />;
  }
  const baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  const urls = ['', 'back/', 'shiny/', 'back/shiny/'].map(str => `${baseSpriteUrl + str + id}.png`);
  const { height, weight } = pokemon;
  return (
    <div>
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
    </div>
  );
};

export default Pokemon;
