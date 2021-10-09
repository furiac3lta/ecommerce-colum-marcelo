import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./styles/app.css";
import "./styles/Navbar.css";
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
import Inicio from "./components/Inicio";
import Detalle from "./components/Detalle";
import { useState, useEffect } from "react";
import { auth } from "./Config/Config";
import Navbar from "./components/Navbar";
import { useHistory } from "react-router";
import { DataProvider } from "./context/DataContext";
import Footer from "./components/Footer";
import Orden from "./components/Orden";

function App() {
  const [carrito, cambiarCarrito] = useState([]);

  const [firebaseUser, setFirebaseUser] = useState(false);
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);

        history.push("/");
      }
    });
  }, []);

  return firebaseUser !== false ? (
  <DataProvider>
      <Router>
      <Header />
      <Navbar firebaseUser={firebaseUser} />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home/auriculares/" component={Auriculares} />
        <Route exact path="/home/celulares/" component={Celulares} />
        <Route exact path="/home/notebooks/" component={Notebooks} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home/carrito" component={Carrito} />
        <Route exact path="/add-products" component={AddProducts} />
        <Route path="/detalle/:id" component={Detalle} />
        <Route path="/Orden/:id" component={Orden} />
      </Switch>
    </Router>
    <Footer />
  </DataProvider>) : (
    <p> Cargando .... </p>
  );
 
}

export default App;
