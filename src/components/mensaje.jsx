import React from "react";
import '../mensaje.css'

function Texto({ texto }) {
    return (
        <div className="mensaje">
            <p>{texto}</p>
        </div>
    )
}

export default Texto