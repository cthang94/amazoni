import React, { Component } from "react";
import Product from "./Product";
import img1_path from "./images/id1_bookImg.jpeg";
import img2_path from "./images/id2_bookImg.jpeg";
import img3_path from "./images/id3_bookImg.jpeg";
import img4_path from "./images/id4_bookImg.jpeg";
import img5_path from "./images/id5_bookImg.jpeg";

class ShoppingCart extends Component {
  state = {
    products: [
      {
        id: 1,
        productName: "Introduction to Algorithms",
        price: 125.99,
        quantity: 20,
        img: img1_path,
      },
      {
        id: 2,
        productName: "Cracking the Coding Interview",
        price: 59.99,
        quantity: 40,
        img: img2_path,
      },
      {
        id: 3,
        productName: "Clean Code",
        price: 99.99,
        quantity: 71,
        img: img3_path,
      },
      {
        id: 4,
        productName: "Think Like a Programmer",
        price: 24.99,
        quantity: 10,
        img: img4_path,
      },
      {
        id: 5,
        productName: "Learning SQL",
        price: 42.99,
        quantity: 65,
        img: img5_path,
      },
    ],
  };
  render() {
    return (
      <div className="row container-fluid">
        <h1 className="m-2">Shopping Cart</h1>
        {this.state.products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              onIncrease={this.quantityIncrease}
              onDecrease={this.quantityDecrease}
            >
              <button className="btn btn-primary">Purchase</button>
            </Product>
          );
        })}
      </div>
    );
  }

  quantityIncrease = () => {};

  quantityDecrease = () => {};
}

export default ShoppingCart;
