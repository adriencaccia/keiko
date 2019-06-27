import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Style from './Pokemon.style';

interface Props {
  id: number;
  name: string;
  height: string;
  weight: string;
}

const Pokemon = (props: Props) => {
  const [facing, setFacing] = useState(true);
  const { id, name, height, weight } = props;
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  const url = `${baseSpriteUrl + (facing ? '' : 'back/') + id}.png`;
  const turn = () => {
    setFacing(!facing);
  };
  return (
    <Style.Card>
      <Style.Header>{capitalizedName}</Style.Header>
      <Style.Toggle
        onClick={turn}
        src="https://trello-attachments.s3.amazonaws.com/5d0ce56e059f0263f02e0155/5d0ce56e059f0263f02e01b8/x/84f45513081d61ceedc7bdf7c4442d72/turn-ico.svg"
      />
      <img src={url} />
      <div>
        <FormattedMessage id="pokemon.id" />: {id}
      </div>
      <div>
        <FormattedMessage id="pokemon.height" />: {height} kg
      </div>
      <div>
        <FormattedMessage id="pokemon.weight" />: {weight} cm
      </div>
    </Style.Card>
  );
};

export default Pokemon;
