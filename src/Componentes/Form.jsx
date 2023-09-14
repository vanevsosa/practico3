import Boton from '../Components/Boton';

export default function Form(props) {
    
    function clickEnviar() {

      let nombre= document.getElementById("user-name").value;

      if(nombre ===''){
        alert('ERROR, INGRESA UN NOMBRE')
      } else {
        props.callback(nombre, false);
      }
    }
  
    return(
        <div className="form-contenedor">

            <p>Ingresá tu NOMBRE y hacé click en ENVIAR</p>

            <input type='text' id="user-name" />
            
            <Boton value='ENVIAR' onClick={clickEnviar} />
            
  
</div>
    );
}

