import piedra from '../Images/piedra.png';
import papel from '../Images/papel.png';
import tijera from '../Images/tijera.png';
import BotonConImg from './BotonConImg';

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
        <div className="jugada-usuario">

            <p>Hacé click en una de las 3 opciones y después en JUGADA</p>

            <BotonConImg imagen={piedra} tamaño={100} onClick={piedraClick} />
            <BotonConImg imagen={papel} tamaño={100} onClick={papelClick} />
            <BotonConImg imagen={tijera} tamaño={100} onClick={tijeraClick} />
        </div>
    );
}