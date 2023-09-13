import './App.css';
import Botones from './Componentes/Botones';
import Formulary from './Componentes/Formulary';
import Intro from './Componentes/Intro';
import Jugada from './Componentes/Jugada';
import Marcadores from './Componentes/Marcadores';
import Resultados from './Componentes/Resultados';
import Title from './Componentes/Title';
import { useState } from 'react';
import JugadaUsuario from './Components/JugadaUsuario';

function App() {
  let [nombre, setNombre] = useState("");
  let [jugadaUsuario, setJugadaUsuario] = useState("");
  let [ronda, setRonda] = useState({
    jugadaCompu:"",
    resultado:"",
    ganadosUsuario:"0",
    ganadosCompu:"0",
    resultadoFinal:"gana quien sume 3 victorias",
  });

  return (
    <div className="App">
      
      <h1>Piedra, Papel o Tijera?</h1>
      
      <Intro/>
      <Formulary callback={(n) => setNombre(n)}/>
      <JugadaUsuario callback={(ju) => setJugadaUsuario(ju)}/>
      <Jugada jugadaUsuario={jugadaUsuario} nombre={nombre} ronda={ronda} callback={(ronda) => setRonda(ronda)}/>
      <Resultados ronda={ronda} jugadaUsuario={jugadaUsuario} />
      <Marcadores nombre={nombre} ronda={ronda} />
      <Botones/>
        
    </div>
  );
}

export default App;
