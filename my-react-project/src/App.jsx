import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

//Componente App
function App() {
  return (
    <>
      <Header nosotros="nosotros" home="home" contacto="contacto" />
      <Main />
      <Footer />
    </>
  );
}

export default App;
