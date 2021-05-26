import React from 'react';
// import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Greating from './components/greating';
import About from './components/About';
import Contact from './components/Contact'
import Home from './components/Home';
import Signup from './components/signup';
import Cards from './components/cards';
import Covid from './components/covid';
import ToDo from './components/ToDo';

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/my-app" >
        <Home />
      </Route>

      <Route path="/my-app/about">
        <About />
      </Route>

      <Route path="/my-app/contact">
        <Contact />
      </Route>

      <Route path="/my-app/signUp">
        <Signup/>
      </Route>

      <Route path="/my-app/Greating">
        <Greating />
      </Route>
      <Route path="/my-app/cards">
        <Cards/>
      </Route>
      <Route path="/my-app/covid">
        <Covid/>
      </Route>
      <Route path="/my-app/ToDo">
        <ToDo/>
      </Route>
      <Footer/>



    </>
  );
}

export default App;
