import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="col-lg-9 m-auto p-3">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        {/* Beginning of Email */}
        <div className="form-group form-row m-1 p-1">
          <label className="col-lg-4 m-1">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          ></input>
        </div>
        {/* Beginning of password */}
        <div className="form-group form-row m-1 p-1">
          <label className="col-lg-4 m-1">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ email: event.target.password });
            }}
          ></input>
        </div>
        {/* Beginning of Login */}
        <div className="">
          <button
            className="btn btn-primary m-2 p-2"
            onClick={this.onLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  onLoginClick = () => {};
}

export default Login;
