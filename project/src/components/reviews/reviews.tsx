import {useState, useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';

import Review from './review';
import ModalReview from '../modal-review/modal-review';

import {ReviewType, GuitarType} from '../../types/types';

import {REVIEWS_COUNT_PER_STEP} from '../../const';

type ReviewProps = {
  reviews: ReviewType[],
  guitar: GuitarType,
}


function Reviews(props: ReviewProps): JSX.Element {
  const { reviews, guitar } = props;

  // Модальное окно "Оставить отзыв"
  const [modalActive, setModalActive] = useState(true);

  // Вывод списка отзывов
  let arrayForHoldingReviews: ReviewType[] = [];

  const [reviewsToShow, setReviewsToShow] = useState<ReviewType[]>([]);
  const [next, setNext] = useState(REVIEWS_COUNT_PER_STEP);

  const loopWithSlice = (start: number, end: number) => {
    const slicedReviews = reviews.slice(start, end);
    arrayForHoldingReviews = [...arrayForHoldingReviews, ...slicedReviews];
    setReviewsToShow(arrayForHoldingReviews);
  };

  useEffect(() => {
    loopWithSlice(0, REVIEWS_COUNT_PER_STEP);
  }, []);

  const handleShowMoreReviews = () => {
    loopWithSlice(next, next + REVIEWS_COUNT_PER_STEP);
    setNext(next + REVIEWS_COUNT_PER_STEP);
  };

  // eslint-disable-next-line no-console
  console.log(next);

  // eslint-disable-next-line no-console
  console.log(reviewsToShow);


  return (
    <Fragment>
      <section className="reviews">
        <h3 className="reviews__title title title--bigger">Отзывы</h3>
        <Link
          className="button button--red-border button--big reviews__sumbit-button"
          to="#"
          onClick={() => setModalActive(true)}
        >
          Оставить отзыв
        </Link>

        {reviewsToShow.map(
          (review, i) =>
            (
              <Review key={review.id} review={review} />
            ),
        )}

        <button
          className="button button--medium reviews__more-button"
          onClick={handleShowMoreReviews}
        >
          Показать еще отзывы
        </button>

        <Link className="button button--up button--red-border button--big reviews__up-button" to="#header">Наверх</Link>
      </section>

      <ModalReview guitar={guitar} active={modalActive} setActive={setModalActive} />
    </Fragment>
  );
}

export default Reviews;
