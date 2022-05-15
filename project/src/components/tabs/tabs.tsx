import {Link} from 'react-router-dom';

import {GuitarType} from '../../types/guitar';

type TabsProps = {
  currentProduct: GuitarType;
};

function Tabs({currentProduct}: TabsProps): JSX.Element {
  const {vendorCode, description, stringCount} = currentProduct;

  return (
    <div className="tabs">
      <Link className="button button--medium tabs__button" to="#characteristics">Характеристики</Link>
      <Link className="button button--black-border button--medium tabs__button" to="#description">Описание</Link>
      <div className="tabs__content" id="characteristics">
        <table className="tabs__table">
          <tr className="tabs__table-row">
            <td className="tabs__title">Артикул:</td>
            <td className="tabs__value">{vendorCode}</td>
          </tr>
          <tr className="tabs__table-row">
            <td className="tabs__title">Тип:</td>
            <td className="tabs__value">Электрогитара</td>
          </tr>
          <tr className="tabs__table-row">
            <td className="tabs__title">Количество струн:</td>
            <td className="tabs__value">{stringCount} струнная</td>
          </tr>
        </table>
        <p className="tabs__product-description hidden">{description}</p>
      </div>
    </div>
  );
}

export default Tabs;
