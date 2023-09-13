import Botones from './Botones';

export default function Formulary(props) {
    
    function manejarClick() {

      let nombre= document.getElementById("user-name").value;

      if(nombre===''){
        alert('ERROR, INGRESA UN NOMBRE')
      } else {
        props.callback(nombre);
    }
  }
  
    return(
        <div className="div-nombre">

      <p>Ingresá tu NOMBRE y hacé click en ENVIAR</p>

      <label>Tu nombre : <input type="text" id="nombre" /></label>
    
      <Boton value="Enviar" onClick={manejarClick} />
  
</div>
    );
}

