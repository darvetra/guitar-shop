import {GuitarType} from '../../types/guitar';

type ProductCardProps = {
  product: GuitarType;
}

function ProductCard({product}: ProductCardProps): JSX.Element {
  const {name, previewImage, price} = product;

  return (
    <div className="product-card">
      <img src={previewImage} srcSet="img/content/catalog-product-0@2x.jpg 2x" width="75" height="190" alt={name} />
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"/>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"/>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"/>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"/>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-star"/>
          </svg>
          <p className="visually-hidden">Рейтинг: Хорошо</p>
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>9
          </p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <a className="button button--mini" href="#">Подробнее</a>
        <a className="button button--red button--mini button--add-to-cart" href="#">Купить</a>
      </div>
    </div>
  );
}

export default ProductCard;
