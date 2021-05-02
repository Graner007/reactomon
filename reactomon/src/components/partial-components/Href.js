import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

const Href = ({ url, text }) => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark; 
    
            return (
                <Link to={url} className="link" style={{ color: theme.syntax, background: theme.ui }}>{text}</Link>
            );
        }}
        </ThemeContext.Consumer>
    );
}

export default Href;