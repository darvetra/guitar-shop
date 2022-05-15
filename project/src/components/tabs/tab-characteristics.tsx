import {GuitarType} from '../../types/guitar';

type TabCharacteristicsProps = {
  currentProduct: GuitarType;
};

function TabCharacteristics({currentProduct}: TabCharacteristicsProps): JSX.Element {
  const {vendorCode, stringCount} = currentProduct;

  return (
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
  );
}

export default TabCharacteristics;
