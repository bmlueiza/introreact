import React from "react";

//Componente Main

export default function Main({ children }) {
  return (
    <main>
      <section>
        <article>{children}</article>
      </section>
    </main>
  );
}
