import React from 'react';
import styled from '@emotion/styled';

const ResulDiv = styled.div`
color:#FFF;
font-family:Arial, Helvetica, sans-serif;
`;

const Parraf = styled.p`
font-size:18px;

    span{
        font-weight:bold;
    }
`;

const Price = styled.p`
font-size:30px;
span{
        font-weight:bold;
    }
`;



const Quotation = ({ result }) => {
    //validando que el result no llegue vacio
    if (Object.keys(result).length === 0) return null;

    return (
        <ResulDiv>
            <Price>El precio es: <span>{result.PRICE}</span></Price>
            <Parraf>El precio mas alto del dia: <span>{result.HIGHDAY}</span></Parraf>
            <Parraf>El precio mas bajo del dia: <span>{result.LOWDAY}</span></Parraf>
            <Parraf>Variacion ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></Parraf>
            <Parraf>Ultima Actualizacion: <span>{result.LASTUPDATE}</span></Parraf>
        </ResulDiv>
    );
}

export default Quotation;