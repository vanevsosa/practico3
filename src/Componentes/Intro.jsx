import Boton from '../Components/Boton';

export default function Intro(props) {

  function clickAjugar() {

    let mostrar = false;
    props.callback(mostrar);
  }
    return(

      <div className="intro-contenedor">

      <Boton value='A JUGAR !' onclick={clickAjugar} />

</div>
  );
}