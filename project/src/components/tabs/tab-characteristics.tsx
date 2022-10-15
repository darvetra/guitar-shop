import {GuitarType} from '../../types/types';
import {getRussianGuitarType} from '../../utils';


type TabCharacteristicsProps = {
  currentProduct: GuitarType;
};

function TabCharacteristics({currentProduct}: TabCharacteristicsProps): JSX.Element {
  const {vendorCode, stringCount, type} = currentProduct;


  return (
    <table className="tabs__table">
      <tr className="tabs__table-row">
        <td className="tabs__title">Артикул:</td>
        <td className="tabs__value">{vendorCode}</td>
      </tr>
      <tr className="tabs__table-row">
        <td className="tabs__title">Тип:</td>
        <td className="tabs__value">{getRussianGuitarType(type)}</td>
      </tr>
      <tr className="tabs__table-row">
        <td className="tabs__title">Количество струн:</td>
        <td className="tabs__value">{stringCount} струнная</td>
      </tr>
    </table>
  );
}

export default TabCharacteristics;
