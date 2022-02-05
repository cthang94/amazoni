import React, { Component } from "react";

class Product extends Component {
  state = {
    product: this.props.product,
  };
  render() {
    return (
      <div className="row d-flex align-items-stretch m-auto">
        <div className="card p-3 m-3">
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
            <h2 className="p-3 border-top text-center text-decoration-underline card-title">
              {this.state.product.productName}
            </h2>
            <img
              className="img-fluid border\"
              src={this.state.product.img}
              alt="Textbook"
              height="300"
              width="250"
            ></img>
            <p class="">{this.state.product.description}</p>
          </div>
          {/* card body ends here */}
          <div className="card-footer">
            <div className="float-start m-1 p-4">
              {this.state.product.quantity}
              <span className="badge"></span>
              <div className="btn-group m-2">
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
