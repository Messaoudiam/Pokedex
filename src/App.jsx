import { useState, useEffect } from "react";
import pokemonData from "./assets/data.json";

import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  return (
    <div>
      <PokemonCard pokemon={pokemonData[pokemonIndex]} />
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonData}
      />
    </div>
  );
}

export default App;
