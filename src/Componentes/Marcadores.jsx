import compu from '../Images/compu.gif';
import usuario from '../Images/usuario.gif';
import vs from '../Images/versus- vs.jpg';

export default function Marcadores(props) {
    return(

<div className="marcadores">

    <img src={usuario} tamaño={140}/>
    <p className="marcador-usuario">{props.nombre}: {props.ronda.ganadoUsuario}</p>
    <img src={vs} tamaño={50}/>
    <p className="marcador-compu">Compu: {props.ronda.ganadosCompu}</p>
    <img src={compu} tamaño={140}/> 
  
</div>
  );
}
    
