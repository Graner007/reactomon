import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    return (
        <div className="cards">
            { pokemons.map((pokemon, index) => (
                <PokemonCard pokemon={pokemon} index={index} />
            )) }
        </div>
    )
}

export default PokemonList;