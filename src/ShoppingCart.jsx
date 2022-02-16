import React, { Component } from "react";
import Product from "./Product";
class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div className="row container-fluid cartCT">
        <h1 className="m-2 p-2">Shopping Cart</h1>
        {this.state.products.map((data, key) => {
          return (
            <Product
              key={data.id}
              product={data}
              onIncrease={this.quantityIncrease}
              onDecrease={this.quantityDecrease}
              onDelete={this.handleDelete}
            ></Product>
          );
        })}
      </div>
    );
  }
}

export default ShoppingCart;
