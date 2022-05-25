import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {AppRoute} from '../../const';
import {setCurrentPage} from '../../store/action';

type PaginationProps = {
  pages: number[],
  currentPage: number,
}

function Pagination({pages, currentPage}: PaginationProps): JSX.Element {
  const dispatch = useDispatch();

  const onChangeCurrentPage = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">

        {pages.map(
          (page) => (
            <li key={page} className={`pagination__page ${currentPage === page && 'pagination__page--active'}`}>
              <Link
                to={`${AppRoute.CatalogPathPart}${page}`}
                className="link pagination__page-link"
                onClick={(evt) => {
                  onChangeCurrentPage(Number(evt.currentTarget.innerText));
                }}
              >
                {page}
              </Link>
            </li>
          ),
        )}

        {/*<li className="pagination__page pagination__page--active">*/}
        {/*  <Link className="link pagination__page-link" to="1">1</Link>*/}
        {/*</li>*/}
        {/*<li className="pagination__page">*/}
        {/*  <Link className="link pagination__page-link" to="2">2</Link>*/}
        {/*</li>*/}
        {/*<li className="pagination__page">*/}
        {/*  <Link className="link pagination__page-link" to="3">3</Link>*/}
        {/*</li>*/}
        {/*<li className="pagination__page pagination__page--next" id="next">*/}
        {/*  <Link className="link pagination__page-link" to="2">Далее</Link>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
}

export default Pagination;
