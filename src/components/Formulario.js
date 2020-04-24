import React from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency'

const Button = styled.input`
margin-top:20px;
font-weight:bold;
font-size:20px;
padding:10px;
background-color:#66a2fe;
border:none;
width:100%;
border-radius:10px;
color:#FFF;
transition:background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Formulario = () => {

    const CURRENCY = [
        {code: 'USD', name: 'Dolar Estado Unidense'},
        {code: 'MXN', name: 'Peso Mexicano'},
        {code: 'EUR', name: 'Euru'},
        {code: 'GBP', name: 'Libra Esterlina'},
        {code: 'VEN', name: 'Bolivar'},
        {code: 'CHL', name: 'Peeso Chileno'},
    ]

    //Destructurin del stateCurrency
    const [currency, ToSelect] = useCurrency('Elige tu Moneda', '', CURRENCY);

    return (
        <form>
            <ToSelect/>

            <Button
            type="submit"
            value="Calcular"
            />

        </form>
      );
}
 
export default Formulario;