import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import AllWalls from './component/AllWalls';
import Form from "./component/Main";
import OneWall from './component/OneWall';
import FormEdit from './component/FormEdit';
import Create from './component/Create';

function App() {
  let[formSubmitted, setFormSubmitted]= useState(false);

  return (
    <div className="App">
      <h1>Favorite Walls</h1>
      <Link to={'/walls'}>Add an author</Link>
      <h3>We have quotes by:</h3>
      <Routes>
        <Route exact path="/" element={
      <>
        <Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></Form>
        <hr />
        <AllWalls formSubmitted={formSubmitted}></AllWalls>
      </>
        }>
        </Route>
        <Route exact path='/walls/:id' element={<OneWall/>}></Route>
        <Route exact path='/walls/edit/:id' element={<FormEdit/>}></Route>
        <Route exact path='/walls' element={<Create/>}></Route>
      </Routes>
    </div>
  );
}


export default App;

