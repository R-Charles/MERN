import logo from './logo.svg';
import './App.css';
import FetchPokemon from './components/FetchPokemon';

function App() {
  return (
    <div className="App">
      <h1> Pokemon API </h1>
      <FetchPokemon></FetchPokemon>
    </div>
  );
}

export default App;
