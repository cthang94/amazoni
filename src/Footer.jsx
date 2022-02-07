import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="b-example-divider"></div>

        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  Cart
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  Contact
                </a>
              </li>
            </ul>
            <p class="text-center text-muted">&copy; 2021 Amazoni Inc</p>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
