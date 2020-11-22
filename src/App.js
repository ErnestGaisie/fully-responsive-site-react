import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  witch,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./components/pages/homepage/HomePage";
import Products from "./components/pages/product/Products";
import Services from "./components/pages/services/Services";
import SignUp from "./components/pages/signup/SignUp";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/products" exact component={Products} />
          <Route path="/services" exact component={Services} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
