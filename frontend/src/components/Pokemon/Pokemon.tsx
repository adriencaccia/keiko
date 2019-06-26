import * as React from 'react';

interface Props {
  id: number;
  name: string;
}

class Pokemon extends React.Component<Props> {
  render(): React.ReactNode {
    const { id, name } = this.props;
    return (
      <div>
        <div>name: {name}</div>
        <div>id: {id}</div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
      </div>
    );
  }
}

export default Pokemon;
