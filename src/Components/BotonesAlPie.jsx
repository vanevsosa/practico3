

export default function BotonesAlPie(props) {

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