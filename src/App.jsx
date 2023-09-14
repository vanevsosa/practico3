import './App.css';
import { useState } from 'react';
import Intro from './Componentes/Intro';
import Form from './Componentes/Form';
import JugadaUsuario from './Components/JugadaUsuario';
import Resultados from './Componentes/Resultados';
import Marcadores from './Componentes/Marcadores';
import BotonesAlPie from './Components/BotonesAlPie';
import Jugada from './Componentes/Jugada';

function App() {

  let [nombre, setNombre] = useState('');

  let [jugadaUsuario, setJugadaUsuario] = useState('');

  let [rondas, setRondas] = useState({
    jugadaCompu:'',
    resultado:'',
    ganadosUsuario:'0',
    ganadosCompu:'0',
    resultadoFinal:'(gana quien sume 3 puntos)'
    });

  let [mostrarIntro, setMostrarIntro] = useState(true);

  function manejarIntro(mostrar){
    setMostrarIntro(mostrar);
   
  }

  let [mostrarForm, setMostrarForm] = useState(true);

  function manejarForm(nombre, mostrar){
    setNombre(nombre);
    setMostrarForm(mostrar);
  }

  let [mostrarJugada, setMostrarJugada] = useState(true);

  function manejarRondas(rondas, mostrar){
    setRondas(rondas);
    setMostrarJugada(mostrar);
  }

  function manejarSiguiente(jU, mostrar){
    setJugadaUsuario(jU);
    setMostrarJugada(mostrar);
  }
  
  function manejarBotones(boton) {
    if(boton ==='REINICIAR MARCADORES') {
      setJugadaUsuario('');
      setRondas({
        jugadaCompu:'',
        resultado:'',
        ganadosUsuario:'0',
        ganadosCompu:'0',
        resultadoFinal:'(gana quien sume 3 puntos)'
      });
      setMostrarJugada(true);
    } else if(boton ==='CAMBIAR NOMBRE'){
      setMostrarForm(true);
    }

  }

  return (
    <div className='App'>

      <h1 className='h1' >Piedra , Papel o Tijera ?</h1>

      <div>
        {mostrarIntro && <Intro callback={(mostrar)=>manejarIntro(mostrar)} />}
      </div>

      <div>
        {!mostrarIntro && 
        <div>
          {mostrarForm &&
          <div>
            <Form callback={(nombre, mostrar) => manejarForm(nombre, mostrar)} />
          </div>}

          <div>
            {!mostrarForm &&
            <div>
              {mostrarJugada &&
              <div>
                <JugadaUsuario callback={(jU) => setJugadaUsuario(jU)} />
                <Jugada jugadaUsuario={jugadaUsuario} nombre={nombre} rondas={rondas} callback={(rondas, mostrar)=>manejarRondas(rondas, mostrar)} />
              </div>}
              <div>
                {!mostrarJugada &&
                <Resultados jugadaUsuario={jugadaUsuario} rondas={rondas} callback={(jU, mostrar)=>manejarSiguiente(jU, mostrar)} />}
              </div>

              <Marcadores nombre={nombre} rondas={rondas} />
              <BotonesAlPie callback={(boton) => manejarBotones(boton)} />
            </div>}
          </div>
          
        </div>}

      </div>

    </div>
  );
}

export default App;