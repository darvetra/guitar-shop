import {GuitarType} from '../../types/guitar';

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
            <Link className="link" to="./main.html">Главная</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="link" to="./main.html">Каталог</Link>
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
        <section className="reviews">
          <h3 className="reviews__title title title--bigger">Отзывы</h3>
          <Link className="button button--red-border button--big reviews__sumbit-button" to="#">Оставить отзыв</Link>
          <div className="review">
            <div className="review__wrapper">
              <h4 className="review__title review__title--author title title--lesser">Иванов Максим</h4><span className="review__date">12 декабря</span>
            </div>
            <div className="rate review__rating-panel">
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-star"></use>
              </svg>
              <p className="visually-hidden">Оценка: Хорошо</p>
            </div>
            <h4 className="review__title title title--lesser">Достоинства:</h4>
            <p className="review__value">Хороший корпус, чистый звук, стурны хорошего качества</p>
            <h4 className="review__title title title--lesser">Недостатки:</h4>
            <p className="review__value">Тугие колонки</p>
            <h4 className="review__title title title--lesser">Комментарий:</h4>
            <p className="review__value">У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня.</p>
          </div>
          <div className="review">
            <div className="review__wrapper">
              <h4 className="review__title review__title--author title title--lesser">Перова Ольга</h4>
              <span className="review__date">12 декабря</span>
            </div>
            <div className="rate review__rating-panel">
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-star"></use>
              </svg>
              <p className="visually-hidden">Оценка: Хорошо</p>
            </div>
            <h4 className="review__title title title--lesser">Достоинства:</h4>
            <p className="review__value">Хороший корпус, чистый звук, стурны хорошего качества</p>
            <h4 className="review__title title title--lesser">Недостатки:</h4>
            <p className="review__value">Тугие колонки</p>
            <h4 className="review__title title title--lesser">Комментарий:</h4>
            <p className="review__value">У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. </p>
          </div>
          <div className="review">
            <div className="review__wrapper">
              <h4 className="review__title review__title--author title title--lesser">Преображенская  Ксения</h4><span className="review__date">12 декабря</span>
            </div>
            <div className="rate review__rating-panel">
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-star"></use>
              </svg>
              <p className="visually-hidden">Оценка: Хорошо</p>
            </div>
            <h4 className="review__title title title--lesser">Достоинства:</h4>
            <p className="review__value">Хороший корпус, чистый звук, стурны хорошего качества</p>
            <h4 className="review__title title title--lesser">Недостатки:</h4>
            <p className="review__value">Тугие колонки</p>
            <h4 className="review__title title title--lesser">Комментарий:</h4>
            <p className="review__value">У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. </p>
          </div>
          <button className="button button--medium reviews__more-button">Показать еще отзывы</button>
          <Link className="button button--up button--red-border button--big reviews__up-button" to="#header">Наверх</Link>
        </section>
      </div>
    </main>
  );
}

export default ProductPage;

