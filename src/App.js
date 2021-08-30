import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import "./styles/app.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auriculares from "./components/Pages/Auriculares";
import Celulares from "./components/Pages/Celulares";
import Notebooks from "./components/Pages/Notebooks";
import Inicio from "./components/Pages/Inicio";

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
