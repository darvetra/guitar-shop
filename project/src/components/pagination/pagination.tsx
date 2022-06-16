import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute, GUITARS_COUNT_PER_PAGE} from '../../const';
import {setCurrentPage} from '../../store/action';
import {State} from '../../types/state';
import {getGuitars} from '../../store/data/selectors';
import {getPaginationPages} from '../../utils';

// type PaginationProps = {
//   pages: number[],
//   currentPage: number,
// }

const mapStateToProps = (state: State) => ({
  pages: getPaginationPages(getGuitars(state).length, GUITARS_COUNT_PER_PAGE),
  currentPage: 3,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Pagination(props: ConnectedComponentProps): JSX.Element {
// function Pagination({pages, currentPage}: PaginationProps): JSX.Element {
  const {pages, currentPage} = props;

  const dispatch = useDispatch();

  const onChangeCurrentPage = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
    // eslint-disable-next-line no-console
    console.log('нажата кнопка с номером страницы');
    // eslint-disable-next-line no-console
    console.log(pageNumber);
  };

  // eslint-disable-next-line no-console
  console.log(pages);

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

// export default Pagination;
export {Pagination};
export default connector(Pagination);
