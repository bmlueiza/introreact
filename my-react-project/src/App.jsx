import "./App.css";

// Componentes
// Componentes son funciones que retornan pseudo html
// Se pueden pasar propiedades a los componentes

// Componente Header
// En JSX, los props se acceden a traves de un objeto que se pasa como primer argumento de la funcion (props por convencion)
// También podría colocarse {home, nosotros, contacto} en lugar de props y acceder a las propiedades directamente
function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">{props.home}</a>
          </li>
          <li>
            <a href="#">{props.nosotros}</a>
          </li>
          <li>
            <a href="#">{props.contacto}</a>
          </li>
        </ul>
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
  {
    console.log(
      "este es un render donde se muestra el header, main y footer. Se retorna pseudo html con jsx"
    );
  }
  {
    console.log(
      "No se puede retornar dos elementos html sin un contenedor padre, por eso se usa el fragment <></>"
    );
  }
  {
    console.log("para escribir codigo js se usa {} ");
  }
  return (
    <>
      <Header nosotros="nosotros" home="home" contacto="contacto" />
      <Main />
      <Footer />
    </>
  );
}

export default App;
