import React from "react";
import '../Styles/Boton.css';

export default function boton({ onClick, value }) {
    return(
      <button className="boton" onClick={onClick}>
        {value}
      </button>
      
    );
  }