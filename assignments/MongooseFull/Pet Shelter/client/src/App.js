import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import AllPets from './component/AllPets';
import Form from "./component/Main";
import OnePet from './component/OnePet';
import FormEdit from './component/FormEdit';
import Create from './component/Create';

function App() {
  let[formSubmitted, setFormSubmitted]= useState(false);

  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Routes>
        <Route exact path="/" element={
      <>
        <Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></Form>
        <hr />
        {/* <AllPets formSubmitted={formSubmitted}></AllPets> */}
      </>
        }>
        </Route>
        <Route exact path='/pets/:id' element={<OnePet/>}></Route>
        <Route exact path='/pets/:id/edit' element={<FormEdit/>}></Route>
        <Route exact path='/pets/new' element={<Create/>}></Route>
      </Routes>
    </div>
  );
}


export default App;

