import React from "react";

export default function Jugada(props) {

  let jugadaUsuario = props.jugadaUsuario;
	let jugadaCompu = props.rondas.jugadaCompu;
	let resultado = props.rondas.resultado;
	let rondas = props.rondas;
	let ganadosUsuario = props.rondas.ganadosUsuario;
	let ganadosCompu = props.rondas.ganadosCompu;
  let resultadoFinal = props.rondas.resultadoFinal;

  function jugada(){

    if(jugadaUsuario === '') {
      alert('ERROR, ELEGI TU JUGADA !');
    } else {
      jugadaCompu = (["piedra", "papel", "tijera"][Math.floor(Math.random() * 2.99)]);

    switch(jugadaUsuario + jugadaCompu){
      case "piedrapapel":
        resultado = ('ganó la compu');
        ganadosCompu++;
        break;

      case "piedratijera":
        resultado = ('ganaste');
        ganadosUsuario++;
        break;

      case "papelpiedra":
        resultado = ('ganaste');
        ganadosUsuario++;
        break;

      case "papeltijera":
        resultado = ('ganó la compu');
        ganadosCompu++;
        break;

      case "tijerapiedra":
        resultado = ('ganó la compu');
        ganadosCompu++;
        break;

      case "tijerapapel":
        resultado = ('ganaste');
        ganadosUsuario++;
        break;

      default:
        resultado = ("es EMPATE , se vuelve a jugar");
    }

    if(ganadosUsuario === 3){
      resultadoFinal = (`JUEGO FINALIZADO, GANASTE !`);
    } else if(ganadosCompu === 3){
      resultadoFinal = ('JUEGO FINALIZADO, GANÓ LA COMPU !');
    }  

       rondas = {
			  jugadaCompu:(jugadaCompu), 
			  resultado:(resultado), 
			  ganadosUsuario:(ganadosUsuario),
			  ganadosCompu:(ganadosCompu),
        resultadoFinal:(resultadoFinal)
		};

    props.callback (rondas, false);
    }
  }

    return(
      <button onClick={jugada}>JUGADA</button>
    ); 
    }
