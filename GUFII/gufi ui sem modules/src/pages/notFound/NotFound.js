import Header from "../../components/Header/header";

function NotFound() {
  return (
    <div className="App">
      <Header/>
      <header className="header-notfound">
        <h1 className="titulo-notfound">404 - Página não encontrada</h1>
      </header>
    </div>
  );
}

export default NotFound;