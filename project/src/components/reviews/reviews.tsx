import {Link} from 'react-router-dom';

import {ReviewType} from '../../types/review';

import Review from './review';

type ReviewProps = {
  reviews: ReviewType[],
}

function Reviews({reviews}: ReviewProps): JSX.Element {

  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <Link className="button button--red-border button--big reviews__sumbit-button" to="#">Оставить отзыв</Link>

      {reviews.map(
        (review, i) =>
          (
            <Review key={review.id} review={review} />
          ),
      )}

      <button className="button button--medium reviews__more-button">Показать еще отзывы</button>
      <Link className="button button--up button--red-border button--big reviews__up-button" to="#header">Наверх</Link>
    </section>
  );
}

export default Reviews;
