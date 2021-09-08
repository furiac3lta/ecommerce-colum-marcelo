import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import "./styles/app.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auriculares from "./components/Auriculares";
import Celulares from "./components/Celulares";
import Notebooks from "./components/Notebooks";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Carrito from "./components/Carrito";
import AddProducts from "./components/AddProducts";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Navbar />
          <Carousel />
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/auriculares" component={Auriculares} />
          <Route exact path="/celulares" component={Celulares} />
          <Route exact path="/notebooks" component={Notebooks} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/carrito" component={Carrito} />
          <Route exact path="/add-products" component={AddProducts} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
