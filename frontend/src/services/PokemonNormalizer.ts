import { PokemonInterface } from 'components/Pokemon/Pokemon';
import { PokemonState } from 'redux/Pokemon';

const normalize = (array: PokemonInterface[]): PokemonState =>
  array.reduce(
    (object: PokemonState, item: PokemonInterface) => ({ ...object, [item.id]: item }),
    {},
  );

export { normalize };
