import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth, fs } from "../Config/Config";
import "../styles/app.css";
import "../styles/Navbar.css";
import "animate.css";

function Navbar(props) {
  function GetCurrentUser() {
    const [user, setUser] = useState();
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().Fullname);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }
  const user = GetCurrentUser();

  return (
    <>
      {props.firebaseUser !== null ? (
        <>
          <div className="colors">
          <div className="container">
            <div className="row minav">
              <div className="col-lg-12">
                <div className="collapse">
                  <div className="bg  bg-dark p-4">
                    <h5 className="text-white h4">Collapsed content</h5>
                    <span className="text-muted">
                      Toggleable via the navbar brand.
                    </span>
                  </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
                    <NavLink className="navbar-brand" exact to="/home">
                      Todos
                    </NavLink>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNav"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                      }}
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <NavLink
                            className="nav-link active"
                            aria-current="page"
                            exact
                            to="/home/notebooks"
                          >
                            Notebooks
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link"
                            exact
                            to="/home/celulares"
                          >
                            Celulares
                          </NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink
                            className="nav-link"
                            exact
                            to="/home/auriculares"
                          >
                            Auriculares
                          </NavLink>
                        </li>
                      </ul>
                      <ul>
                        <li className="usuario">Bienvenido {user} </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              
              </div>
            </div>
          </div>
        
          </div>
          </>
      ) : (
        /*   */
       <div className="colors">
          <div className="container">
          <div className="row minav">
            <div className="col-lg-12">
              <div className="collapse">
                <div className="bg  bg-dark p-4">
                  <h5 className="text-white h4">Collapsed content</h5>
                  <span className="text-muted">
                    Toggleable via the navbar brand.
                  </span>
                </div>
              </div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" exact to="/">
                    Quienes Somos
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                    }}
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink
                          className="nav-link active"
                          aria-current="page"
                          exact
                          to="/"
                        >
                          Contacto
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          exact
                          to="/"
                        >
                          Ofertas
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <li className="usuario">Bienvenido Anonimo</li>
                    </ul>
                  </div>
                 
                </div>
              </nav>
              <hr></hr>
             <div className="container ">
             <div className="text-nav justify-content-center">
                    <h5
                      id="miH5"
                      className=" container animate__animated animate__slow animate__fadeOut"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                      }}>
                      Bienvenido Registrese o Login para poder ver mas
                      informacion de los productos en venta
                    </h5>
                  </div>
             </div>
            </div>
          </div>
        </div>
      </div>)}
    </>
  );
}
export default Navbar;
