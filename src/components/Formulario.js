import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Axios from 'axios';

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
    //State para la lista de criptomonedas
    const [ listCriptomonedas, saveCriptomonedas ] = useState([]);

    const CURRENCY = [ 
        {code: 'USD', name: 'Dolar Estado Unidense'},
        {code: 'MXN', name: 'Peso Mexicano'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'Libra Esterlina'},
        {code: 'VEN', name: 'Bolivar'},
        {code: 'CHL', name: 'Peso Chileno'},
    ]

    //Destructuring del stateCurrency
    const [stateCurrency, ToSelectCurrency] = useCurrency('Elige tu Moneda', '', CURRENCY);

    //Destructuring del stateCriptomoneda
    const [stateCripto, ToSelectCripto ] = useCriptomoneda('Elige tu Criptomoneda', '', listCriptomonedas);

    //Peticion al API

    useEffect( ()=> {

        const getApi = async ()=> {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            //Consultando y obteniendo la data haciendo la peticion a la url usando axios
            const result = await Axios.get(url);
            //Guardando la data en el state listCriptomonedas
            saveCriptomonedas(result.data.Data)
        }
        
        getApi();
    }, []);
    

    return (
        <form>
            <ToSelectCurrency/>

            <ToSelectCripto/>

            <Button
            type="submit"
            value="Calcular"
            />

        </form>
      );
}
 
export default Formulario;