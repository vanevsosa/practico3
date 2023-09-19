import React from "react";
import '../Styles/Resultados.css';

/* Se encarga de mostrar el resultado de cada ronda, y anuncia el ganador cuando finaliza el juego. Tiene un
botón que que habilita la siguiente ronda a menos que haya finalizado, entonces muestra un alert*/
export default function Resultados(props) {

    function siguiente() {
        if(props.rondas.ganadosUsuario === 3 || props.rondas.ganadosCompu === 3) {
            alert('JUEGO FINALIZADO, DEBES REINICIAR');
        } else {
            props.callback('', true);
        }
    }

    return(
        <div className="resultados-contenedor">

            <h2>Elegiste {props.jugadaUsuario}, la compu 
            eligió {props.rondas.jugadaCompu}, {props.rondas.resultado}</h2>

            <h2>{props.rondas.resultadoFinal}</h2>

            <button onClick={siguiente}>SIGUIENTE</button>
            
        </div>
    );
}