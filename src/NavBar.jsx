import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-styleCT">
          <div className="container-fluid">
            <a className="navbar-brand m-2 brandCT" href="/#">
              <div className="logo-holder logo-CT">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item p-2 m-2">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item p-2 m-2">
                  <a className="nav-link" href="/#">
                    Link
                  </a>
                </li>
                <li className="nav-item p-2 m-2">
                  <a className="nav-link" href="/#">
                    Link
                  </a>
                </li>
                <li className="nav-item p-2 m-2">
                  <a className="nav-link" href="/#">
                    Link
                  </a>
                </li>
              </ul>
              <form className="d-flex p-2 m-2">
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
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
