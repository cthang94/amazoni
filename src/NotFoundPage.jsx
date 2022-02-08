import React, { Component } from "react";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="card border-danger mb-3 m-auto p-auto">
        <div className="card-header">
          <h1 class="text-center text-danger">Error 404 code</h1>
        </div>
        <div className="card-body text-danger">
          <h5 className="card-title text-center text">Unable to find page</h5>
          <p className="card-text text-center">Page not found!</p>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
