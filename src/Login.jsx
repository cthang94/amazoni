import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      password: props.password,
    };
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-10 mx-auto">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={this.state.password}
                onChange={(event) => {
                  this.setState({ email: event.target.password });
                }}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              onClick={this.onLoginClick}
            >
              Login
            </button>
            <hr className="my-4" />
            <small className="text-muted">
              Login using your assigned email address and password
            </small>
          </form>
        </div>
      </React.Fragment>
    );
  }

  onLoginClick = (event) => {
    event.preventDefault();
    this.setState({
      email: this.props.state.email,
      password: this.props.state.password,
    });
    console.log(this.props.state.email);
  };
}

export default Login;
