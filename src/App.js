import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Quotation from './components/Quotation';
import Spinner from './components/Spinner';


const Container = styled.div`
  max-width:900px;
  margin:0 auto;
    @media (min-width:992px){
      display:grid;
      grid-template-columns:repeat(2,1fr);
      column-gap:2rem;
    }
`;

const Image = styled.img`
  max-width:100%;
  margin-top:5rem;
`;

const Heading = styled.h1`
  font-family:'Bebas Neue', cursive;
  color:#FFF;
  text-align:left;
  font-weight:700;
  font-size:50px;
  margin-bottom:50px;
  margin-top:80px;

    &::after {
      content:'';
      width:100px;
      height:6px;
      background-color:#66A2FE;
      display:block;
    }
`;

function App() {
//State para guardar las elecciones de moneda y criptomonda del usuario al hacer click
  const [currency, saveCurrency]= useState('');
  const [cripto, saveCripto]= useState('');

//State para guardar el resultado que obtenemos de la data
  const [result, saveResult]= useState({});

//State para spinner
const [ spinner, setSpinner ] = useState(false);

//Usando useEffect para consultas del API.
useEffect(()=>{
 
  const quote = async () => {
      //Evitando la ejecucion la primera vez porque esta vacio el state
    if(currency==='') return;

    //Consultando API
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${currency}`
    const result = await Axios.get(url);

     //Mostrando spinner
     setSpinner(true);

     //Utilizamon un setTime para agregar un poco de asincronia a la funcion y lograr que el spinner se vea un poco mas
     setTimeout(()=>{

       //Ocultando Spinner
      setSpinner(false);
      //Guardando cotizacion
      saveResult(result.data.DISPLAY[cripto][currency]);

     },3000)

    
  }

  quote();

},[currency, cripto]);

//Condicionamiento de componente
const component = (spinner) ? <Spinner/> : <Quotation result= { result } />

  return (
    <Container>
    <div>
      <Image
      src={imagen} alt="imagen criptomoneda"
      />
    </div>
    <div>
      <Heading>Cotiza Criptomonedas al Instante</Heading>
      <Formulario
      saveCurrency= { saveCurrency }
      saveCripto= { saveCripto }
      />

      { component }

    </div>
    </Container>
  );
}

export default App;
