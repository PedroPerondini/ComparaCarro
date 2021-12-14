import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState();

   React.useEffect (function() {
    axios.get("https://api-carros.herokuapp.com/api/Carro/GetId/1", {headers: {
      "requestToken" : "bcd40b09-6328-4335-9de9-fd91cbcf46e5"
    }})
    .then(response => setData(response.data), console.log(data))
    .catch(error => console.log(error))
   })

  return (
    <div className="App"></div>
  );
}

export default App;