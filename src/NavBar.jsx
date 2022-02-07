import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-styleCT">
          <div className="container-fluid">
            <a className="navbar-brand brandCT" href="/index.html">
              <div className="logo-holder logo-CT m-2">
                <h3 className="display-3">Amazoni</h3>
              </div>
              {/* <img src={logo} className="img-fluid logoCT" alt="Amazoni"></img> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navbarCT"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item p-2 m-2">
                  <Link
                    to="/home"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item p-2 m-2">
                  <Link to="/cart" className="nav-link">
                    Cart
                  </Link>
                </li>
                <li className="nav-item p-2 m-2">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item p-2 m-2">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="">
                <div className="nav-item login float-start text-decoration-none p-2">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </div>
                <form className="d-flex p-2 me-2">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
