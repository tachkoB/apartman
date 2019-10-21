import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Header = () => (
  <nav className="navbar navbar-expand-sm  navbar-dark bg-dark">
    <div className="container">
      <Link href="" className="navbar-brand">
        Dada Apartmani
      </Link>
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
            <Link to="apartment" className="nav-link">
              Apartment
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/medulin" className="nav-link">
              About Medulin
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/page-2" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
