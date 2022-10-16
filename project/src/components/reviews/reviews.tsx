import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Review from './review';

import {ReviewType} from '../../types/types';

import {REVIEWS_COUNT_PER_STEP} from '../../const';

type ReviewProps = {
  reviews: ReviewType[],
}


function Reviews({reviews}: ReviewProps): JSX.Element {

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
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <Link className="button button--red-border button--big reviews__sumbit-button" to="#">Оставить отзыв</Link>

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
  );
}

export default Reviews;
