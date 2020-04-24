import React from 'react'

const Quotation = ({ result }) => {
    //validando que el result no llegue vacio
    if (Object.keys(result).length === 0) return null;

    return (
        <div>
            <p>El precio es: <span>{result.PRICE}</span></p>
            <p>El precio mas alto del dia: <span>{result.HIGHDAY}</span></p>
            <p>El precio mas bajo del dia: <span>{result.LOWDAY}</span></p>
            <p>Variacion ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
            <p>Ultima Actualizacion: <span>{result.LASTUPDATE}</span></p>
        </div>
    );
}

export default Quotation;