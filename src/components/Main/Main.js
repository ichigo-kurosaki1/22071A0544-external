import React from 'react'
import "./Main.css"
import { Outlet,Link } from 'react-router-dom'

function Main() {
  return (
    <div>
        <nav>
        <ul>
            <li>
              <Link className="links" to="/">Home</Link>
            </li>
            <div class="nav-right">
            <li>
              <Link className="links" to="/register">Register</Link>
            </li>
            <li>
              <Link className="links" to="/login">Login</Link>
            </li>
            <li>
              <Link className="links" to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link className="links" to="/cart">Carts</Link>
            </li>
            <li>
              <Link className="links" to="/catalog">Catalog</Link>
            </li>
            </div>
        </ul>
    </nav>
    <Outlet className="outlet"/>
    <footer>
        <p>22071A0544@Copyright</p>
    </footer>
    </div>
  )
}

export default Main