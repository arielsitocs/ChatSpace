import React from "react";
import '../texto.css'

function Texto({ texto }) {
    return (
        <div className="mensaje">
            <p>{texto}</p>
        </div>
    )
}

export default Texto