import {useState} from 'react';
import {Link} from 'react-router-dom';

import {GuitarType} from '../../types/guitar';

import {getTabsNames} from '../../utils';

import TabCharacteristics from '../tabs/tab-characteristics';
import TabDescription from '../tabs/tab-description';

type TabsProps = {
  currentProduct: GuitarType;
};

function Tabs({currentProduct}: TabsProps): JSX.Element {
  const tabs = ['characteristics', 'description'];
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="tabs">

      {tabs.map((tab) => (
        <Link to={`#${tab}`} className={`button button--medium tabs__button ${tab !== active && 'button--black-border'}`} onClick={() => setActive(tab)} key={tab}>
          {getTabsNames(tab)}
        </Link>
      ))}

      <div className="tabs__content" id="characteristics">

        {active === tabs[0] && <TabCharacteristics currentProduct={currentProduct} />}
        {active === tabs[1] && <TabDescription currentProduct={currentProduct} />}

      </div>
    </div>
  );
}

export default Tabs;
