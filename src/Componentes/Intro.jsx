import React from "react";

export default function Intro(props) {

  function aJugar() {

    let mostrar = false;
    props.callback(mostrar);
  }
    return(

      <div className="intro-contenedor">

      <button onClick={aJugar}>A JUGAR !</button>

</div>
  );
}