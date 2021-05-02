import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from "react";

const PokemonCard = ({ pokemon, index }) => {

    const id = pokemon.url.split("/")[6];
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark; 
    
    return (
        <div className="card" key={ index } style={{ background: theme.bg, color: theme.syntax }}>
            {/* <img src={pokemon.url.sprites.frontDefault} alt="pokemon" style={{ width:'75px', height:'40px' }}/> */}
            <h3 style={{ color: theme.syntax }}>{ pokemon.name }</h3>
            <Link to={`/pokemon/${id}`} style={{ color: theme.syntax }}>{ id }</Link>
        </div>
    );
}

export default PokemonCard;