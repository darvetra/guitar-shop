import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';

import MainScreen from '../main/main';
import NotFound from '../not-found/not-found';
import {GuitarType} from '../../types/guitar';

type AppScreenProps = {
  products: GuitarType[];
}

function App({products}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
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
