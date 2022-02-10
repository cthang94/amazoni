import React, { Component } from "react";
import NavBar from "./NavBar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: "false",
    };
  }

  render() {
    return (
      <div className="col-lg-9 m-auto p-3">
        <h1 className="m-1 p-2 border-bottom">Login</h1>
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
            z
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ email: event.target.password });
            }}
          ></input>
        </div>
        {/* Beginning of Login */}
        <div className="text-end">
          {this.state.message}
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

  onLoginClick = () => {
    if (this.state.email === "admin" && this.state.password === "admin123") {
      this.setState({
        message: <span className="text-success">Successfully logged in!</span>,
      });
    } else {
      this.setState({
        message: <span className="text-danger">Failed to login!</span>,
      });
    }
  };
}

export default Login;
