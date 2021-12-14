import React, { useEffect, useState } from 'react';
import Box from './components/box'
import Axios from 'axios';
import axios from 'axios';

function App() {
  let myHeaders = new Headers();
  myHeaders.append("requestToken", "bcd40b09-6328-4335-9de9-fd91cbcf46e5");

  let id = 1;
  let url = "https://api-carros.herokuapp.com/api/Carro/GetId/" + id;
  
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  return (
    <div className="App">
      
    </div>
  );
}

export default App;