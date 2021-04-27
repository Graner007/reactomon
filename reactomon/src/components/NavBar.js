import Href from './Href';
/* import logo from './pokemon-logo.png'; */

const NavBar = () => {
    return (
        <nav className='navbar'>
            {/* <img src={ logo } height="200px" width="600px" /> */}
            <Href url="/pokemons" text='Pokemons' />
            <Href url="types" text='Types' />
        </nav>
    )
}

export default NavBar