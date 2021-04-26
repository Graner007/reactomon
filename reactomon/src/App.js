import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import NavBar from "./components/NavBar";
/* import BottomLeftPicture from "./components/BottomLeftPicture"; */
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
          {/* <BottomLeftPicture /> */}
        </div>
      </Router>
  );
}

export default App