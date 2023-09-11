import './App.css';
import Botones from './Componentes/Botones';
import Formulary from './Componentes/Formulary';
import Intro from './Componentes/Intro';
import Jugada from './Componentes/Jugada';
import Marcadores from './Componentes/Marcadores';
import Resultados from './Componentes/Resultados';
import Title from './Componentes/Title';


function App() {
  return (
    <div className="App">
      
      <Botones/>
      <Formulary/>
      <Intro/>
      <Jugada/>
      <Marcadores/>
      <Resultados/>
      <Title/>
        
    </div>
  );
}

export default App;
