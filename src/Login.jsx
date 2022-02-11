import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: "false",
    };
  }

  render() {
    return (
      <React.Fragment>
        <div class="col-md-10 mx-auto">
          <form class="p-4 p-md-5 border rounded-3 bg-light">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={this.state.password}
                onChange={(event) => {
                  this.setState({ email: event.target.password });
                }}
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button
              class="w-100 btn btn-lg btn-primary"
              type="submit"
              onClick={this.onLoginClick}
            >
              Sign up
            </button>
            <hr class="my-4" />
            <small class="text-muted">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </React.Fragment>
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
