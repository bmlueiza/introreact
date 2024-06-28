//Todo esto es JSX, no es HTML, es una sintaxis que se parece mucho a HTML pero es JavaScript
// JSX es una extensión de la sintaxis de JavaScript. Nos permite escribir HTML en React y crear plantillas que se parecen a HTML, pero que son realmente JavaScript.
// Esto es un componente de React, un componente es una función que devuelve un elemento de React.
// Se crea con la extensión es7, escribiendo rfc y presionando la tecla enter
import React from "react";

//Componente Header

export default function Header(props) {
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
