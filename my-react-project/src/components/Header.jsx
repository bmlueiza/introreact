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
