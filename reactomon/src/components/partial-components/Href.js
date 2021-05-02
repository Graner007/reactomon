import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from "react";

const Href = ({ url, text }) => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return ( 
        <Link to={url} className="link" style={{ color: theme.syntax, background: theme.ui }}>{text}</Link>
    )
}

export default Href;