import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {
  id: number;
  name: string;
}

class Pokemon extends React.Component<Props> {
  render(): React.ReactNode {
    const { id, name } = this.props;
    return (
      <div>
        <div>
          <FormattedMessage id="pokemon.id" />: {id}
        </div>
        <div>
          <FormattedMessage id="pokemon.name" />: {name}
        </div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
      </div>
    );
  }
}

export default Pokemon;
