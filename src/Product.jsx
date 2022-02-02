import React, { Component } from "react";

class Product extends Component {
  state = {
    product: this.props.product,
  };
  render() {
    return (
      <div className="col-lg-2 d-flex align-items-stretch">
        <div className="card m-3">
          <div className="card-body pt-3">
            <div className="text-muted">Book ID #{this.state.product.id}</div>
            <h2 className="pt-3 border-top text-center text-decoration-underline card-title">
              {this.state.product.productName}
            </h2>
            <div className="pt-3">${this.state.product.price}</div>
            <img
              className="img-fluid"
              src={this.state.product.img}
              alt="Textbook"
              height="300"
              width="250"
            ></img>
          </div>
          {/* card body ends here */}
          <div className="card-footer text-end">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Product;
