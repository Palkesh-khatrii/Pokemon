import React from 'react';
import './App.css'
import PokemonList from './components/PokemonList.jsx'
import PokemonDetails from './components/PokemonDetails.jsx'
import { BrowserRouter as Router, Route, Link, useRouteError, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import PokemonAdd from './components/PokemonAdd.jsx';
import PokemonEdit from './components/PokemonEdit.jsx';



function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}



function App() {

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/pokemon/list" element={<PokemonList/>} />
            <Route path="/pokemon/add" element={<PokemonAdd/>} />
            <Route path="/pokemon/edit/:id" element={<PokemonEdit />} />
            <Route path="/pokemon/detail/:id" element={<PokemonDetails/>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
