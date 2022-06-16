import {Link} from 'react-router-dom';
import {getImgPath} from '../../utils';
import {AppRoute} from '../../const';
import {GuitarType} from '../../types/types';

type ProductCardProps = {
  guitar: GuitarType;
}

function ProductCard(props: ProductCardProps): JSX.Element {
  const {guitar} = props;
  const {id, name, previewImg, price} = guitar;
  const imgPath = getImgPath(previewImg);
  // const history = useHistory();

  return (
    <div className="product-card">
      <img
        src={imgPath}
        // srcSet="img/content/catalog-product-0@2x.jpg 2x"
        width="75"
        height="190"
        alt={name}
        // onClick={() => history.push(`/product/${id}`)}
      />
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
        <Link className="button button--mini" to={`${AppRoute.ProductPathPart}${id}`}>Подробнее</Link>
        <Link className="button button--red button--mini button--add-to-cart" to="#">Купить</Link>
      </div>
    </div>
  );
}

export default ProductCard;
