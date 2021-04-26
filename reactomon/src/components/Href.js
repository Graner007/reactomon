import { Link } from 'react-router-dom';

const Href = ({ url, text }) => {
    return (
        <Link to={url} className="link">{text}</Link>
    )
}

export default Href