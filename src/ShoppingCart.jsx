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
      <div>
        <h4>Shopping Cart</h4>
      </div>
    );
  }
}

export default ShoppingCart;
