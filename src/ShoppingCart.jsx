import React, { Component } from "react";
class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  render() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Shopping Cart</h2>
      </main>
    );
  }
}

export default ShoppingCart;
