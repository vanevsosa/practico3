import BotonConImg from '../Components/BotonConImg';
import compu from '../Images/compu.gif';
import usuario from '../Images/usuario.gif';
import vs from '../Images/versus- vs.jpg';
import '../Styles/Marcadores.css';

/* La función de este componente es simplemente para mostrar los marcadores, los cuales le ingresan a través
de props desde app*/
export default function Marcadores(props) {
    return(

<div className="marcadores-contenedor">

    <BotonConImg imagen={usuario} tamaño={140} />
    <p className='marcador-usuario'>{props.nombre}: {props.rondas.ganadosUsuario} </p>
    <BotonConImg imagen={vs} tamaño={80} />
    <p className="marcador-compu">Compu: {props.rondas.ganadosCompu} </p>
    <BotonConImg imagen={compu} tamaño={140} /> 
  
</div>
  );
}
    
