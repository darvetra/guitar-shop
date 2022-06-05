import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main/main';
import ProductPage from '../product-page/product-page';
import NotFound from '../not-found/not-found';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.Product}>
          <ProductPage />
        </Route>
        <Route exact path={AppRoute.Catalog}>
          <MainScreen />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
