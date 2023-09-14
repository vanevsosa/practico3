export default function Boton({onclick, value}) {
    return(
        <button className="boton" onClick={onclick}>
            {value}
        </button>
    );
}