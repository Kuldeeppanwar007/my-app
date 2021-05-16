import React from 'react'
// import {Route} from 'react-router-dom'

import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
       

        <div className="collapse navbar-collapse" id="navbar-div">
          <ul className="navbar-nav" >
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/greating">Greating</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cards">cards</NavLink>
            </li>

          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar
