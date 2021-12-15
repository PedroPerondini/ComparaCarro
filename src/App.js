import React, { useState } from 'react';
import Header from './components/header';
import axios from 'axios';
import './App.css';
import porscheMap from './assets/porsche_and_map.png';


function App() {
  let id = 1;
  const url = "https://api-carros.herokuapp.com/api/Carro/GetId/" + id;
  const [data, setData] = useState();

   React.useEffect(function() {
      axios.get(url, {headers: {
         "requestToken" : "bcd40b09-6328-4335-9de9-fd91cbcf46e5"
      }})
      .then(response => setData(response.data), console.log(data))
      .catch(error => console.log(error))
   }, [])

   console.log(data)
   
  return (
    <>
      <Header></Header>
    
    <div className="App">
      <h1 className='titulo'> Comparador de Carros </h1>
      

{/* 
      <div className="dados-carro">
        <p>Fabricante: { data?.fabricante }</p>
        <p>Modelo: { data?.modelo }</p>
        <p>Ano de Fabricação: { data?.anoDeFabricacao }</p>
        <p>Potência: { data?.potencia }HP</p>
        <p>Torque: { data?.torque }kgfm</p>
        <p>Litragem do Motor: { data?.litragemMotor }L</p>
        <p>Aspiração: { data?.aspiracao }</p>
        <p>0 à 100km/h: { data?.zeroACem } segundos</p>
        <p>Velocidade Máxima: { data?.velocidadeFinal }km/h</p>
        <p>Nacionalidade: { data?.nacionalidade }</p>
        <p>Tipo de Combustível: { data?.combustivel }</p>
        <p>Consumo de Combustivel: { data?.consumoCombustivel }km/l</p>
      </div> */}

    </div>
    
    
    </>
  );
}

export default App;