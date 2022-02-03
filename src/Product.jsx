import React, { Component } from "react";

class Product extends Component {
  state = {
    product: this.props.product,
  };
  render() {
    return (
      <div className="row d-flex align-items-stretch">
        <div className="card m-3">
          <div className="card-body pt-3">
            <div className="text-muted">Book ID #{this.state.product.id}</div>
            <h2 className="pt-3 border-top text-center text-decoration-underline card-title">
              {this.state.product.productName}
            </h2>
            <img
              className="img-fluid"
              src={this.state.product.img}
              alt="Textbook"
              height="300"
              width="250"
            ></img>
            <div className="text-start">
              <p className="">Price: ${this.state.product.price}</p>
            </div>
          </div>
          {/* card body ends here */}
          <div className="card-footer">
            <div className=" mt-2 pt-2 float-start">
              {this.state.product.quantity}
              <span className="badge"></span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={this.props.onIncrease}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={this.props.onDecrease}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-end">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
