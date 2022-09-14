import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllProducts from './component/AllProducts';
import Form from './component/Form'
import OneProduct from './component/OneProduct';


function App() {
  return (
    <div className="App container">
      <h1>Product Manager</h1>
      
      <Routes>
        <Route exact path="/" element={
          <>
          <Form></Form>
          <hr></hr>
          <AllProducts></AllProducts>
          </>
        }>
        </Route>

        <Route exact path= "/products/:id" element= {<OneProduct/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
