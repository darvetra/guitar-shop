import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import {useFetchGuitar} from '../../hooks/use-fetch-guitar';
import {ParamsType} from '../../types/types';

import Reviews from '../reviews/reviews';
import Tabs from '../tabs/tabs';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFound from '../not-found/not-found';

import {AppRoute, LoadingStatus} from '../../const';
import {getImgPath, getStarRating} from '../../utils';
// import {getRussianGuitarType} from "../../utils";

function ProductPage(): JSX.Element {
  const params: ParamsType = useParams();
  const currentGuitarId = params.id;

  const {guitar, loadStatus} = useFetchGuitar(currentGuitarId);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://guitar-shop.accelerator.pages.academy/guitars/${currentGuitarId}/comments`)
      .then((response) => response.json())
      .then((json) => {
        setReviews(json);
      });
  }, []);

  if (guitar === null && loadStatus === LoadingStatus.Loading) {
    return <LoadingScreen />;
  } else if (loadStatus === LoadingStatus.Error) {
    return <NotFound />;
  } else if (guitar === null){
    return <LoadingScreen />;
  }

  const {name, previewImg, price, rating} = guitar;

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

              { getStarRating(rating) }

              <p className="visually-hidden">Оценка: Хорошо</p>
            </div>

            <Tabs currentProduct={guitar} />

          </div>
          <div className="product-container__price-wrapper">
            <p className="product-container__price-info product-container__price-info--title">Цена:</p>
            <p className="product-container__price-info product-container__price-info--value">{price} ₽</p>
            <Link className="button button--red button--big product-container__button" to="#">Добавить в корзину</Link>
          </div>
        </div>

        <Reviews reviews={reviews} />

      </div>
    </main>
  );
}

export default ProductPage;

