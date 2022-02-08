import React, { Component } from "react";
import Product from "./Product";

class Home extends Component {
  constructor(props) {
    super(props); // calling parent class's constructor
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div className="row container-fluid cartCT">
        <h1 className="m-2 p-2">Home</h1>
        {this.state.products.map((data, key) => {
          return (
            <Product
              key={data.id}
              product={data}
              onIncrease={this.quantityIncrease}
              onDecrease={this.quantityDecrease}
              onDelete={this.handleDelete}
            >
              <button className="btn btn-primary">Add to Cart</button>
            </Product>
          );
        })}
      </div>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {};

  componentDidCatch = (error, info) => {
    console.log(error, info);
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  };

  // executes after constructor & render method
  // componentDidMount = async () => {
  //   console.log("component did mount - home");
  //   fetch("http://localhost:8000/products")
  //     .then((res) => {
  //       console.log("component did mount2 - home", res);

  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log("component did mount3 - home", data);

  //       this.setState({ products: data });
  //     });
  // };

  componentDidMount = async () => {
    console.log("component did mount");
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    this.setState({ products: data });
  };

  quantityIncrease = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };

  quantityDecrease = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
    this.setState({ products: allProducts });
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete?")) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}

export default Home;
