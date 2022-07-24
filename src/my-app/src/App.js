import './App.css';
import {useState} from "react";
import PokemonInfo from "./components/PokemonInfo"

function App() {
  const [api, setApi] = useState([])
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => setApi(data.results))

  return (
    <div className="App">
        <PokemonInfo api={api} />

    </div>
  );
}

export default App;
