import React from 'react';
// import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Greating from './components/greating'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Cards from './components/cards';


function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/" >
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/Greating">
        <Greating />
      </Route>
      <Route path="/cards">
         <div style={{display:"flex"}}>
        <Cards name="kuldeep" />

        <Cards name="panwar" />


        <Cards name="sanjna panwar" />

        </div>
      </Route>


    </>
  );
}

export default App;
