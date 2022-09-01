import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner</h1>
      <MenuItem dishName= {"Calamari"} price = {12.00}>
        <p>Its fried squid</p>
        <em>May contain the following allergens: seafood, wheat, gluten</em>
      </MenuItem>
      <MenuItem dishName= {"Sea Bass"} price = {18.00}>
        <p>Its fish, but its fresh</p>
        <em>Safe for everyone to eat</em>
      </MenuItem>
      <MenuItem dishName= {"Linguini Alfredo"} price = {20.00}>
        <p>Its pasta with white sauce</p>
        <em>May contain the following allergens: wheat, gluten, dairy</em>
      </MenuItem>
    </div>
  );
}

export default App;
