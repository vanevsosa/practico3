import React from "react";
import '../Styles/Form.css';

export default function Form(props){

    /* Para el ingreso del nombre de usuario se por id y después se extrae a través de props.callback */
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
            <p>Ingresá tu NOMBRE y hacé click en ENVIAR</p>
            <input type="text" id="user-name" />
            <button onClick={agregarNombre}>ENVIAR</button>
          </div>
      );
  }