import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Header.css";
import { NavLink, useHistory } from "react-router-dom";
import { auth } from "../Config/Config";
import { useContext, useState, useEffect } from "react";
import DataContext from "../context/DataContext";

const Header = ({ user }) => {
  const { carrito} = useContext(DataContext)
  const [count, setCount] = useState(0)
  const history = useHistory();
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };

  const toggleMenu = () => {
    let ancla = document.querySelector(".menu");
    
    ancla.classList.contains("active") ? ancla.classList.remove("active") :  ancla.classList.toggle("active")
  
  };

  const icono =() =>{

    let cantidadTotal =  carrito.reduce((acum, item) => acum + (item.countVendido), 0)
    setCount(cantidadTotal)

  }
useEffect(() => {
icono()
}, [carrito])

  return (
    <div className="colors">
      <div className="container">
        <div>
          <div className="header">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-4 col-sm-5 rowdiv">
                <h3 id="mih3">Mara Shopping {user}</h3>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-8 col-sm-7 coldiv">
                <NavLink exact to="/search">
                  <i class="fas fa-search"></i>
                </NavLink>
                <NavLink exact to="/home/carrito">
                  <i class="fas fa-shopping-cart">
                   {/* { {count} === 0 ? <p></p> : {count} } */}
                   {count}
                    </i>
                </NavLink>
                <NavLink exact to="#">
                  <i
                    onClick={toggleMenu}
                    className="far fa-user"
                    style={{
                      paddingTop: "10px",
                    }}
                  ></i>
                  <ul className="menu">
                    <NavLink exact to="/login">
                      <li>Login</li>
                    </NavLink>
                    <NavLink exact to="/register">
                      <li>Register</li>
                    </NavLink>
                    <NavLink exact to="/home">
                      <li onClick={handleLogout}>Logout</li>
                    </NavLink>
                  </ul>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
