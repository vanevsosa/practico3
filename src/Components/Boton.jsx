import React from "react";

export default function boton({ onClick, value }) {
    return(
      <button className="boton" onClick={onClick}>
        {value}
      </button>
      
    );
  }