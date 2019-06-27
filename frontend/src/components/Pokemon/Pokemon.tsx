import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Style from './Pokemon.style';

interface Props {
  id: number;
  name: string;
  height: string;
  weight: string;
}

class Pokemon extends React.Component<Props> {
  render(): React.ReactNode {
    const { id, name, height, weight } = this.props;
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <Style.Card>
        <Style.Header>{capitalizedName}</Style.Header>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
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
  }
}

export default Pokemon;
