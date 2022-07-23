import './App.css';
import {useState} from "react";

function App() {
  const [api, setApi] = useState([])

  fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setApi(data.results))

  console.log(api[0].name)
  return (
    <div className="App">

    </div>
  );
}

export default App;
