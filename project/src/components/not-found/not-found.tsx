import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <section style={{padding: '20px'}}>
      <h1>404.</h1>
      <p>Page not found</p>
      <Link to="/" style={{fontWeight: 'bold', textDecoration: 'underline'}}>Вернуться на главную страницу</Link>
    </section>
  );
}

export default NotFound;
