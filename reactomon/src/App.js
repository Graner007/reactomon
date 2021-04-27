import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import NavBar from "./components/NavBar";
import Pokemon from "./components/Pokemon";
/* import BottomLeftPicture from "./components/BottomLeftPicture"; */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="container">
          <NavBar /><br/><br/>
          <Route path="/pokemons" exact>
            <PokemonList />
          </Route>
          <Route path="/types" exact>
            <TypeList />
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

export default App