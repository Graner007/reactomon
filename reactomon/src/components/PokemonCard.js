import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {

    const id = pokemon.url.split("/")[6];

    return (
        <div className="card">
            {/* <img src={pokemon.url.sprites.frontDefault} alt="pokemon" style={{ width:'75px', height:'40px' }}/> */}
            <h3>{ pokemon.name }</h3>
            <Link to={`/pokemon/${id}`}>{id}</Link>
        </div>
    )
}

export default PokemonCard