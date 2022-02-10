import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./Home";
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
        <div className="">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" exact element={<ShoppingCart />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
