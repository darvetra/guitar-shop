import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';

import MainScreen from '../main/main';
import ProductPage from '../product-page/product-page';
import NotFound from '../not-found/not-found';
import {GuitarType} from '../../types/guitar';

type AppScreenProps = {
  products: GuitarType[];
  product: GuitarType;
}

function App({products, product}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen products={products} />
        </Route>
        <Route exact path={AppRoute.Product}>
          <ProductPage product={product}/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
