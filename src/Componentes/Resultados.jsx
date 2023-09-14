import Boton from '../Components/Boton';

export default function Resultados(props) {

    function clickSiguiente() {
        if(props.rondas.ganadosUsuario === 3 || props.rondas.ganadosCompu === 3) {
            alert('JUEGO FINALIZADO, DEBES REINICIAR');
        } else {
            props.callback('', true);
        }
    }

    return(
        <div className="resultados-contenedor">

            <h2>El usuario eligió {props.jugadaUsuario}, la compu 
            eligió {props.rondas.jugadaCompu}, punto para {props.rondas.resultado}</h2>

            <h2>{props.rondas.resultadoFinal}</h2>

            <Boton value='SIGUIENTE' onclick={clickSiguiente} />
            
        </div>
    );
}