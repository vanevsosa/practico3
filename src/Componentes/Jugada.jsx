import Botones from './Botones';

export default function Jugada(props) {

  let jugadaUsuario = props.jugadaUsuario;
	let jugadaCompu = props.ronda.jugadaCompu;
	let nombreUsuario = props.nombreUsuario;
	let resultadoJugada = props.ronda.resultadoJugada;
	let rondas = props.rondas;
	let ganadosUsuario = props.ronda.ganadosUsuario;
	let ganadosCompu = props.ronda.ganadosCompu;

  function clickJugada(){
    jugadaCompu = (["piedra", "papel", "tijera"] [Math.floor(Math.random() * 2.99)]);

    switch(jugadaUsuario + jugadaCompu){
      case "piedrapapel":
        resultadoJugada = ('la compu');
				ganadosCompu++;
        break;

      case "piedratijera":
        resultadoJugada = ('vos');
				ganadosUsuario++;
        rondas++;
        break;

      case "papelpiedra":
        resultadoJugada = ('vos');
				ganadosUsuario++;
        break;

      case "papeltijera":
        resultadoJugada = ('la compu');
				ganadosCompu++;
        break;

      case "tijerapiedra":
        resultadoJugada = ('ganó la compu');
				ganadosCompu++;
        break;

      case "tijerapapel":
        resultadoJugada = ('vos');
				ganadosUsuario++;
        break;

      default:
        resultadoJugada = ('empataron');
  }

       rondas = {
			  jugadaCompu:(jugadaCompu), 
			  resultadoJugada:(resultadoJugada), 
			  ganadosUsuario:(ganadosUsuario),
			  ganadosCompu:(ganadosCompu)
		};

    props.callback (rondas);
    }

    return(
      <Botones value='JUGADA' onClick={clickJugada} />
    ); 
}