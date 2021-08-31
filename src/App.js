import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import "./styles/app.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auriculares from "./components/Auriculares";
import Celulares from "./components/Celulares";
import Notebooks from "./components/Notebooks";
import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Register from "./components/Register";
import Carrito from "./components/Carrito";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <NavBar />
          <Carousel />
        </div>

        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/auriculares" component={Auriculares} />
          <Route exact path="/celulares" component={Celulares} />
          <Route exact path="/notebooks" component={Notebooks} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/carrito" component={Carrito} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
