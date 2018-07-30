import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Components
import Header from "./Header";
import Navbar from "./Navbar";
import Homepage from "./HomePage/Homepage";
import Footer from "./Footer";
import Collections from "./Collection/Collections";
import Product from "./Products/Product";

const dude = () => <h1>dude</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={Homepage} />
          <Route path="/collections/:handle" component={Collections} />
          <Route path="/products/:handle" component={Product} />
          <Route path="/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
