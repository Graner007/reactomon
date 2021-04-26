import Href from './Href';
/* import logo from 'src/pokemon-logo.png'; */

const NavBar = () => {
    return (
        <nav className='navbar'>
           {/*  <img src={logo} /> */}
            <Href url="/pokemons" text='Pokemons' />
            <Href url="types" text='Types' />
        </nav>
    )
}

export default NavBar