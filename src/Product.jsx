import React, { Component } from "react";
import db from "./store-db.json";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  componentDidMount = (product) => {};

  render() {
    return (
      <div className="row d-flex align-items-stretch">
        <div className="card m-3 accordion-body shadow">
          <div className="card-body">
            <div className="text-muted text-start">
              Book ID <strong>#{this.state.product.id}</strong>
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <h2 className="p-3 border-top text-center text-decoration-bold card-title">
              {this.state.product.productName}
            </h2>
            <p className="m-2 p-2 descriptionCT">
              <br></br>
              {this.state.product.productDescription}
            </p>
          </div>
          {/* card body ends here */}
          <div className="card-footer">
            <div className="float-start">
              {this.state.product.quantity}
              <span className="badge"></span>
              <div className="btn-group m-2 p-3">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrease(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrease(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>

            <div className="float-end ">
              <p className="m-2">Price: ${this.state.product.price}</p>

              <div className="m-2">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
