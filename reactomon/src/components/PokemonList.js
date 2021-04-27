import PokemonCard from "./PokemonCard";
import axios from "axios";
import { useState, useEffect } from "react";

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(response => {
            setPokemons(response.data.results);
        })
        .catch(error => console.log(error));
    });

    return (
        <div className="cards">
            { pokemons.map((pokemon) => (
                <PokemonCard pokemon={pokemon} />
            )) }
        </div>
    )
}

export default PokemonList