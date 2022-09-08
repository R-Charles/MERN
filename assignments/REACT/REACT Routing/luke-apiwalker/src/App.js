import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Form from './components/Form';
import Info from './components/Info';

function App() {
  return (
    <div className="App container">
      <h1>Luke API </h1>
      <Form></Form>
      <Routes>
        <Route exact path='/:category/:id' element={<Info></Info>} />
      </Routes>
    </div>
  );
}

export default App;
