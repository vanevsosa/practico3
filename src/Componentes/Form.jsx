import React from "react";

export default function Form(props){

    function agregarNombre(){
  
      let nombre = document.getElementById("user-name").value;
  
      if(nombre ===''){
        alert('ERROR, INGRESA UN NOMBRE')
      } else {
        props.callback(nombre, false);
      }
  
    }
  
      return (
          <div classname="form-contenedor">
            <h3>Ingresá tu nombre y hacé click en ENVIAR</h3>
            <input type="text" id="user-name" />
            <button onClick={agregarNombre}>ENVIAR</button>
  
          </div>
      );
  }