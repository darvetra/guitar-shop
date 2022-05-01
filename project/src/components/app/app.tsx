import MainScreen from '../main/main';
import {GuitarType} from '../../types/guitar';

type AppScreenProps = {
  products: GuitarType[];
}

function App({products}: AppScreenProps): JSX.Element {
  return (
    <MainScreen products={products} />
  );
}

export default App;
