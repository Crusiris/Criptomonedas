import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Axios from 'axios';
import useCurrency from '../hooks/useCurrency';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error'


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

const Formulario = ({saveCurrency, saveCripto}) => {
    //State para la lista de criptomonedas
    const [ listCriptomonedas, saveCriptomonedas ] = useState([]);

    //State para manejar los errores
    const [ error, saveError ] = useState(false);

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
    

    //Funcion para cotizar moneda al hacer submit
    const quote = e =>{
        e.preventDefault();

        //Validando que los campos no esten vacios
        if(stateCurrency === '' || stateCripto === ''){
            saveError(true);
            return;
        }

        //Sino se pasan los datos al componenente app 
        saveError(false);

        saveCurrency(stateCurrency);
        saveCripto(stateCripto);
    }

    return (
        <form
        onSubmit={quote}
        >
            {error ? <Error message= 'Todos los campos son obligatorios'/> : null }
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