import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Padre from "./components/Hijo";

//Componente App
function App() {
  return (
    <>
      <Header nosotros="nosotros" home="home" contacto="contacto" />
      <Main>
        <Padre />
      </Main>
      <Footer />
    </>
  );
}

export default App;
