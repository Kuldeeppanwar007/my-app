import React, { useState } from 'react'
// import {Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Clock from "./Clock";

// function toggle(){
//   console.log("ok");
//   const togglec = document.getElementsByClassName("toggle-menu");
//   toggle.classli
// }

function Navbar() {
  const[isActive, setActive] = useState(false);
  const[k, setK] = useState(false);


  // let k = "x";
  const toggleClass = () => {
      //  k="y";
    setK(!k)
    setActive(!isActive);
    return(k)
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">


        <div className="collapse navbar-collapse" id="navbar-div">
          <ul  className={isActive ? 'activetoggle' : "navbar-nav"} >
            <li className="nav-item active" >
              <NavLink className="nav-link" to="/my-app">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-app/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-app/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-app/signUp">signUp</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-app/greating">Greating</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-app/cards">cards</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-app/covid">covid-19</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-app/Clock">Clock</NavLink>
            </li>
            <li className="nav-item"> <Clock /></li>
            {/* <li className="nav-item"> </li> */}

          </ul>
          <div id="toggle-menu" className={isActive ? 'activetoggle' : ""}
            onClick={toggleClass}>{k? <i class="fas fa-times"></i> :<i class="fas fa-bars"></i>}</div>

        </div>
      </nav>
    </>
  )
}

export default Navbar
