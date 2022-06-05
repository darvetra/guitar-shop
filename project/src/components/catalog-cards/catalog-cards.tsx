import ProductCard from '../product-card/product-card';
import {GuitarType} from '../../types/types';

type CatalogCardProps = {
  guitars: GuitarType[],
}

function CatalogCards (props: CatalogCardProps): JSX.Element {
  const {guitars} = props;

  return (
    <div className="cards catalog__cards">
      {guitars.map((guitar) => <ProductCard guitar={guitar} key={guitar.id} />)}
    </div>
  );
}

export default CatalogCards;
