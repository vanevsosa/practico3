export default function Botones({onclick, value}) {
    return(
        <button className="boton" onClick={onclick}>
            {value}
        </button>
    );
}