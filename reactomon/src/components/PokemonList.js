import Pokemon from "./Pokemon";
import axios from "axios";
import { useState, useEffect } from "react";

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(response => {
            console.log(response.data.results);
          setPokemons(response.data.results);
        })
        .catch(error => console.log(error));
    });

    useEffect(() => {
        if (window.onscroll) {
            axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => {
              setPokemons([...pokemons, response.data.next.results]);
            })
            .catch(error => console.log(error));
        }
    });

    return (
        <div className="cards">
            { pokemons.map((pokemon) => (
                <Pokemon pokemon={pokemon} />
            )) }
        </div>
    )
}

export default PokemonList