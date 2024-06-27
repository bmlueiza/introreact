import "./App.css";

function Header() {
  return (
    <header>
      <nav>
        <h1>hola mundo</h1>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <section>
        <article>articulo</article>
      </section>
    </main>
  );
}

function Footer() {
  return <footer>@copy; 2024</footer>;
}

function App() {
  return (
    <>
      {console.log(
        "este es un render donde se muestra el header, main y footer. Se retorna pseudo html con jsx"
      )}
      {console.log(
        "No se puede retornar dos elementos html sin un contenedor padre, por eso se usa el fragment <></>"
      )}
      {console.log("para escribir codigo js se usa {} ")}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
