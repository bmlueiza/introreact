import React from "react";

//Muestra de componente Padre llamando a Hijo

function Hijo() {
  return <div>Hijo</div>;
}

function Padre() {
  return (
    <div>
      Padre
      <Hijo />
    </div>
  );
}

export default Padre;
