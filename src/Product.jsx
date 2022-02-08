import React, { Component, useState } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  componentDidMount = (product) => {};

  addToCart = (event) => {
    const [qty, setQty] = useState(0);
  };

  render() {
    return (
      <div className="d-flex align-items-stretch row align-items-center">
        <div className="card m-3 accordion-body shadow col">
          <div className=" card-body">
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
            <div className="productImg float-start">
              <img
                height="250"
                width="250"
                src={this.state.product.img}
                className="border-3 m-2 p-2"
                alt="imgOfProduct"
              ></img>
            </div>
            <p className="m-2 p-2 descriptionCT">
              <br />
              Type: {this.state.product.department}
              <br></br>
              Product Material: {this.state.product.productMaterial}
              <br></br>
              Description: {this.state.product.productDescription}
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

              <div className="m-2">
                <button className="btn btn-primary" onClick={this.addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
