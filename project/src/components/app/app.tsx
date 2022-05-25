import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';

import MainScreen from '../main/main';
import ProductPage from '../product-page/product-page';
import NotFound from '../not-found/not-found';

import {GuitarType} from '../../types/guitar';
import {ReviewType} from '../../types/review';

type AppScreenProps = {
  products: GuitarType[],
  product: GuitarType,
  reviews: ReviewType[],
}

function App({products, product, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen products={products} />
        </Route>
        <Route exact path={AppRoute.Product}>
          <ProductPage product={product} reviews={reviews} />
        </Route>
        <Route exact path={AppRoute.Catalog}>
          <MainScreen products={products} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
