import logo from './logo.svg';
import './App.css';
// import FetchPokemon from './components/FetchPokemon';
import AxiosPokemon from './components/AxiosPokemon';

function App() {
  return (
    <div className="App">
      <h1> Pokemon API </h1>
      {/* <FetchPokemon></FetchPokemon> */}
      <AxiosPokemon></AxiosPokemon>
    </div>
  );
}

export default App;
