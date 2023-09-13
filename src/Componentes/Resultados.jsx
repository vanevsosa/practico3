import Botones from './Botones';

export default function Resultados(props) {
    return(
        <div className="div resultados">

            <p className="resultados-ronda">El usuario eligió {props.jugadaUsuario}, la compu 
            eligió {props.ronda.jugadaCompu}, {props.ronda.resultado}</p>

            <p className="resultado-final">( gana quien sume 3 victorias ) </p>

            <Boton value='SIGUIENTE' />
            
        </div>
    );
}