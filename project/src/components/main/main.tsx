import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {getGuitars} from '../../store/data/selectors';
import Header from '../header/header';
import Footer from '../footer/footer';
import Pagination from '../pagination/pagination';
import CatalogCards from '../catalog-cards/catalog-cards';
import {GUITARS_COUNT_PER_PAGE} from '../../const';

const mapStateToProps = (state: State) => ({
  guitars: getGuitars(state),
  pageSize: GUITARS_COUNT_PER_PAGE,
  totalProductsCount: getGuitars(state).length,
  currentPage: 2,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function MainScreen(props: ConnectedComponentProps): JSX.Element {
  // const {guitars, pageSize, totalProductsCount, currentPage} = props;
  const {guitars, totalProductsCount, currentPage} = props;
  // const {guitars} = props;

  // const pagesCount = Math.ceil(totalProductsCount / pageSize);
  // const pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  // eslint-disable-next-line no-console
  // console.log(this.state.currentPage);

  // eslint-disable-next-line no-console
  console.log(guitars);

  // eslint-disable-next-line no-console
  console.log(totalProductsCount);

  // eslint-disable-next-line no-console
  console.log(currentPage);

  return (
    <Fragment>

      <Header />

      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item">
              <Link className="link" to="./main.html">Главная</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="link" to="/">Каталог</Link>
            </li>
          </ul>
          <div className="catalog">
            <form className="catalog-filter">
              <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">Цена, ₽</legend>
                <div className="catalog-filter__price-range">
                  <div className="form-input">
                    <label className="visually-hidden">Минимальная цена</label>
                    <input type="number" placeholder="1 000" id="priceMin" name="от" />
                  </div>
                  <div className="form-input">
                    <label className="visually-hidden">Максимальная цена</label>
                    <input type="number" placeholder="30 000" id="priceMax" name="до" />
                  </div>
                </div>
              </fieldset>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">Тип гитар</legend>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="acoustic" name="acoustic" />
                  <label htmlFor="acoustic">Акустические гитары</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="electric" name="electric" checked />
                  <label htmlFor="electric">Электрогитары</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="ukulele" name="ukulele" checked />
                  <label htmlFor="ukulele">Укулеле</label>
                </div>
              </fieldset>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">Количество струн</legend>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="4-strings" name="4-strings" checked />
                  <label htmlFor="4-strings">4</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="6-strings" name="6-strings" checked />
                  <label htmlFor="6-strings">6</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="7-strings" name="7-strings" />
                  <label htmlFor="7-strings">7</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input className="visually-hidden" type="checkbox" id="12-strings" name="12-strings" disabled />
                  <label htmlFor="12-strings">12</label>
                </div>
              </fieldset>
              <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
            </form>
            <div className="catalog-sort">
              <h2 className="catalog-sort__title">Сортировать:</h2>
              <div className="catalog-sort__type">
                <button className="catalog-sort__type-button" aria-label="по цене">по цене</button>
                <button className="catalog-sort__type-button" aria-label="по популярности">по популярности</button>
              </div>
              <div className="catalog-sort__order">
                <button className="catalog-sort__order-button catalog-sort__order-button--up" aria-label="По возрастанию"/>
                <button className="catalog-sort__order-button catalog-sort__order-button--down" aria-label="По убыванию"/>
              </div>
            </div>

            <CatalogCards guitars={guitars} />
            {/*<Pagination pages={pages} currentPage={currentPage} />*/}
            <Pagination />

          </div>
        </div>
      </main>

      <Footer />

    </Fragment>
  );
}

export {MainScreen};
export default connector(MainScreen);
