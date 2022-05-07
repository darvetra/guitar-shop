function NotFound(): JSX.Element {
  return (
    <section style={{padding: '20px'}}>
      <h1>404.</h1>
      <p>Page not found</p>
      <a href="/" style={{fontWeight: 'bold', textDecoration: 'underline'}}>Вернуться на главную страницу</a>
    </section>
  );
}

export default NotFound;
