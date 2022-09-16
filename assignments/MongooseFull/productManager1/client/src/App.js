import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import AllProducts from './component/AllProducts';
import Form from "./component/Form";
import OneProduct from './component/OneProduct';
import FormEdit from './component/FormEdit';

function App() {
  let[formSubmitted, setFormSubmitted]= useState(false);

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route exact path="/" element={
      <>
        <Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></Form>
        <hr />
        <AllProducts formSubmitted={formSubmitted}></AllProducts>
      </>
        }>
        </Route>
        <Route exact path='/products/:id' element={<OneProduct/>}></Route>
        <Route exact path='/products/edit/:id' element={<FormEdit/>}></Route>
      </Routes>
    </div>
  );
}


export default App;
