import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    let { id } = useParams();

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            setPokemon(response.data);
        })
        .catch(error => console.log(error));
    });

    return (
        <div className="pokemon">
            <h3>{ pokemon.id }</h3>
            <p>{ pokemon.height }</p>
        </div>
    )
}

export default Pokemon