import { useParams } from 'react-router-dom';
import useAxiosGet from "../useAxiosGet";

const Pokemon = () => {
    let { id } = useParams();
    const pokemon = useAxiosGet(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return (
        <div className="card" key={ pokemon.id }>
            <h3>{ pokemon.id }</h3>
            <p>{ pokemon.height }</p>
        </div>
    )
}

export default Pokemon