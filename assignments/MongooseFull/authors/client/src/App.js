import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import AllAuthors from './component/AllAuthors';
import Form from "./component/Main";
import OneAuthor from './component/OneAuthor';
import FormEdit from './component/FormEdit';
import Create from './component/Create';

function App() {
  let[formSubmitted, setFormSubmitted]= useState(false);

  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Link to={'/authors'}>Add an author</Link>
      <h3>We have quotes by:</h3>
      <Routes>
        <Route exact path="/" element={
      <>
        <Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></Form>
        <hr />
        <AllAuthors formSubmitted={formSubmitted}></AllAuthors>
      </>
        }>
        </Route>
        <Route exact path='/authors/:id' element={<OneAuthor/>}></Route>
        <Route exact path='/authors/edit/:id' element={<FormEdit/>}></Route>
        <Route exact path='/authors' element={<Create/>}></Route>
      </Routes>
    </div>
  );
}


export default App;

