
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#1E3A8A" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">

       
        <div className="d-flex align-items-center">
          <Link
            to="/home"
            className="navbar-brand me-3"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "1.5rem"
            }}
          >
            Home
          </Link>

          <Link
            to="/aboutUs"
            className="nav-link"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "1.3rem"
            }}
          >
            About Us
          </Link>
        </div>

        <div className="d-flex">
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <Link
                className="nav-link"
                to="/"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "1.3rem"
                }}
              >
                Create Data
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/all"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "1.3rem"
                }}
              >
                All Data
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;