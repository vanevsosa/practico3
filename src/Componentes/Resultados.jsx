import React from "react";

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

            <h2>El usuario eligió {props.jugadaUsuario}, la compu 
            eligió {props.rondas.jugadaCompu}, {props.rondas.resultado}</h2>

            <h2>{props.rondas.resultadoFinal}</h2>

            <button onClick={siguiente}>SIGUIENTE</button>
            
        </div>
    );
}