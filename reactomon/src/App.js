import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import NavBar from "./components/NavBar";
import Pokemon from "./components/Pokemon";
/* import BottomLeftPicture from "./components/BottomLeftPicture"; */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useAxiosGet from "./components/useAxiosGet";

function App() {
  const pokemons = useAxiosGet("https://pokeapi.co/api/v2/pokemon");
  const types = useAxiosGet("https://pokeapi.co/api/v2/type");
  console.log(pokemons);

  return (
      <Router>
        <div className="container">
          <NavBar /><br/><br/>
          <Route path="/pokemons" exact>
            <PokemonList pokemons={ pokemons } />
          </Route>
          <Route path="/types" exact>
            <TypeList types={ types } />
          </Route>
          <Switch>
            <Route path="/pokemon/:id" exact>
              <Pokemon />
            </Route>
          </Switch>
          {/* <BottomLeftPicture /> */}
        </div>
      </Router>
  );
}

export default App;