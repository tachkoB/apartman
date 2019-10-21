import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Header = () => (
  <header id="header">
    <nav className="navbar navbar-expand-sm  navbar-dark bg-dark">
      <div className="container">
        <a href="" className="navbar-brand">
          Dada Apartmani
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
