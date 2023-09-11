export default function Jugada() {
    return(

<div id="div-jugada">
  <p>Hacé click en una de las 3 opciones y después en JUGADA</p>
  <div className="botones">
    <button onclick="obtenerJugadaUsuario('piedra')">
      <img src="piedra.png" width="100px" height="100px" title="Piedra" alt="Piedra"/>
    </button>
    <button onclick="obtenerJugadaUsuario('papel')">
      <img src="papel.png" width="100px" height="100px" title="Papel" alt="Papel"/>
    </button>
    <button onclick="obtenerJugadaUsuario('tijera')">
      <img src="tijera.png" width="100px" height="100px" title="Tijera" alt="Tijera"/>
    </button>
  </div>
  <button onclick="jugada()">JUGADA</button>
</div>
    );
}