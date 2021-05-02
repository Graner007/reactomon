import PokemonList from "./components/pokemon-components/PokemonList";
import TypeList from "./components/type-components/TypeList";
import NavBar from "./components/partial-components/NavBar";
import Pokemon from "./components/pokemon-components/Pokemon";
/* import BottomLeftPicture from "./components/BottomLeftPicture"; */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useAxiosGet from "./components/useAxiosGet";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  const pokemons = useAxiosGet("https://pokeapi.co/api/v2/pokemon").results;
  const types = useAxiosGet("https://pokeapi.co/api/v2/type").results;

  return (
      <Router>
        <div className="container">
          <ThemeContextProvider>
            <NavBar /><br/><br/>
            <Switch>
              <Route path="/pokemons" exact>
                <PokemonList pokemons={ pokemons } />
              </Route>
              <Route path="/types" exact>
                <TypeList types={ types } />
              </Route>
              <Route path="/pokemon/:id" exact>
                <Pokemon />
              </Route>
            </Switch>
          </ThemeContextProvider>
          {/* <BottomLeftPicture /> */}
        </div>
      </Router>
  );
}

export default App;