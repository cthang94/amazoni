import React, { Component } from "react";
import NavBar from "./NavBar";
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import NotFoundPage from "./NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact component={About} />
            <Route path="*" component={NotFoundPage} />
          </Routes>
        </div>
        <Login />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
