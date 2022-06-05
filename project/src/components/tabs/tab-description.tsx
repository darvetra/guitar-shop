import {GuitarType} from '../../types/types';

type TabDescriptionProps = {
  currentProduct: GuitarType;
};

function TabDescription({currentProduct}: TabDescriptionProps): JSX.Element {
  const {description} = currentProduct;

  return (
    <p className="tabs__product-description">{description}</p>
  );
}

export default TabDescription;
