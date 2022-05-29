import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute} from '../../const';

import {State} from '../../types/state';

import MainScreen from '../main/main';
import ProductPage from '../product-page/product-page';
import NotFound from '../not-found/not-found';

import {GuitarType} from '../../types/guitar';
import {ReviewType} from '../../types/review';

type AppScreenProps = {
  product: GuitarType,
  reviews: ReviewType[],
}

const mapStateToProps = ({guitars}: State) => ({
  guitars,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & AppScreenProps;

function App(props: PropsFromRedux): JSX.Element {
  const {guitars, product, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen products={guitars} />
        </Route>
        <Route exact path={AppRoute.Product}>
          <ProductPage product={product} reviews={reviews} />
        </Route>
        <Route exact path={AppRoute.Catalog}>
          <MainScreen products={guitars} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
