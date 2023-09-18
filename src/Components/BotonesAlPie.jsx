import '../Styles/BotonesAlPie.css';

export default function BotonesAlPie(props) {

    /* Función dividida en dos funcionalidades (1 por botón) y una función que toma la opción y la saca 
    por props*/
    function reiniciarMarcadores() {
        manejarBotones('REINICIAR MARCADORES');
    }

    function cambiarNombre() {
        manejarBotones('CAMBIAR NOMBRE');
    }

    function manejarBotones(boton) {
        props.callback(boton);
    }

    return(
        <div className='botones-al-pie-contenedor'>

            <button onClick={reiniciarMarcadores}>REINICIAR MARCADORES</button>
            <button onClick={cambiarNombre}>CAMBIAR NOMBRE</button>
        </div>
    );
}