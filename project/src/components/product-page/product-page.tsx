import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import Reviews from '../reviews/reviews';
// import Tabs from '../tabs/tabs';
import {ParamsType} from '../../types/types';
import {useFetchGuitar} from '../../hooks/use-fetch-guitar';
import {AppRoute, LoadingStatus} from '../../const';
// import {getRussianGuitarType} from "../../utils";
import {getImgPath} from '../../utils';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFound from '../not-found/not-found';

function ProductPage(): JSX.Element {
  const params: ParamsType = useParams();
  const currentGuitarId = params.id;

  const {guitar, loadStatus} = useFetchGuitar(currentGuitarId);

  if (guitar === null && loadStatus === LoadingStatus.Loading) {
    return <LoadingScreen />;
  } else if (loadStatus === LoadingStatus.Error) {
    return <NotFound />;
  } else if (guitar === null){
    return <LoadingScreen />;
  }

  // const {previewImg, name, type, description, vendorCode, stringCount, price} = guitar;
  const {name, previewImg, price} = guitar;

  const imgPath = getImgPath(previewImg);
  // const russianGuitarType = getRussianGuitarType(type);

  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-content__title title title--bigger">{name}</h1>
        <ul className="breadcrumbs page-content__breadcrumbs">
          <li className="breadcrumbs__item">
            <Link className="link" to="/">Главная</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="link" to="/">Каталог</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="link" to={`${AppRoute.CurrentGuitar}${currentGuitarId}`}>{name}</Link>
          </li>
        </ul>
        <div className="product-container">
          <img
            className="product-container__img"
            src={imgPath}
            // srcSet="img/content/catalog-product-2@2x.jpg 2x"
            width="90"
            height="235"
            alt={name}
          />
          <div className="product-container__info-wrapper">
            <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
            <div className="rate product-container__rating">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-full-star"/>
              </svg>
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-full-star"/>
              </svg>
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-full-star"/>
              </svg>
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-full-star"/>
              </svg>
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-star"/>
              </svg>
              <p className="visually-hidden">Оценка: Хорошо</p>
            </div>

            {/*<Tabs currentProduct={product} />*/}

          </div>
          <div className="product-container__price-wrapper">
            <p className="product-container__price-info product-container__price-info--title">Цена:</p>
            <p className="product-container__price-info product-container__price-info--value">{price} ₽</p>
            <Link className="button button--red button--big product-container__button" to="#">Добавить в корзину</Link>
          </div>
        </div>

        {/*<Reviews reviews={reviews} />*/}

      </div>
    </main>
  );
}

export default ProductPage;

