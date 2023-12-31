import piedra from '../Images/piedra.png';
import papel from '../Images/papel.png';
import tijera from '../Images/tijera.png';
import BotonConImg from './BotonConImg';


/* Se agrupan las 3 opciones de jugada para el jugador, utilizo 1 función para cada opción que saca por 
props la elegida*/
export default function JugadaUsuario(props) {

    function piedraClick() {
        props.callback('piedra');
    }

    function papelClick() {
        props.callback('papel');
    }

    function tijeraClick() {
        props.callback('tijera');
    }

    return (
        <div className="jugada-usuario-contenedor">

            <p>Hacé click en una de las 3 opciones y después en JUGADA</p>

            <BotonConImg imagen={piedra} tamaño={100} onClick={piedraClick} />
            <BotonConImg imagen={papel} tamaño={100} onClick={papelClick} />
            <BotonConImg imagen={tijera} tamaño={100} onClick={tijeraClick} />

        </div>
    );
}