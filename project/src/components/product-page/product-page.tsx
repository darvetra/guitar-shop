import {GuitarType} from '../../types/guitar';

import Reviews from '../reviews/reviews';

import {Link} from 'react-router-dom';

type ProductCardProps = {
  product: GuitarType;
}

// Странный баг. Не отображается картинка товара, путь верный. При инспектирование кода, картинка есть?!
// Остальные поля продукта - ОК.

function ProductPage({product}: ProductCardProps): JSX.Element {
  const {name, vendorCode, description, previewImage, stringCount, price} = product;

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
            <Link className="link" to="/">{name}</Link>
          </li>
        </ul>
        <div className="product-container">
          <img
            className="product-container__img"
            src={previewImage}
            srcSet="img/content/catalog-product-2@2x.jpg 2x"
            width="90"
            height="235"
            alt={name}
          />
          <div className="product-container__info-wrapper">
            <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
            <div className="rate product-container__rating">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-star"></use>
              </svg>
              <p className="visually-hidden">Оценка: Хорошо</p>
            </div>
            <div className="tabs">
              <Link className="button button--medium tabs__button" to="#characteristics">Характеристики</Link>
              <Link className="button button--black-border button--medium tabs__button" to="#description">Описание</Link>
              <div className="tabs__content" id="characteristics">
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
                <p className="tabs__product-description hidden">{description}</p>
              </div>
            </div>
          </div>
          <div className="product-container__price-wrapper">
            <p className="product-container__price-info product-container__price-info--title">Цена:</p>
            <p className="product-container__price-info product-container__price-info--value">{price} ₽</p>
            <Link className="button button--red button--big product-container__button" to="#">Добавить в корзину</Link>
          </div>
        </div>

        <Reviews />

      </div>
    </main>
  );
}

export default ProductPage;

