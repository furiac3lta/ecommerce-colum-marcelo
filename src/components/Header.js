import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Header.css";
import { NavLink, useHistory } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { auth } from "../Config/Config";
import Navbar from "./Navbar";

const Header = ({ user }) => {
  const history = useHistory();
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };

  const toggleMenu = () => {
    let ancla = document.querySelector(".menu");
    let miAncla = ancla.classList.toggle("active");
    setTimeout(() => {
      if (miAncla) {
        ancla.classList.remove("active");
      }
    }, 2000);
  };

  return (
    <div className="colors">
      <div className="container">
        <div>
          <div className="header">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-4 col-sm-5 rowdiv">
                <h3>Mara Shopping {user}</h3>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-8 col-sm-7 coldiv">
                <NavLink exact to="/search">
                  <i class="fas fa-search"></i>
                </NavLink>
                <NavLink exact to="/carrito">
                  <i class="fas fa-shopping-cart"></i>
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
                      <NavLink exact to="/">
                        <li onClick={handleLogout}>Logout</li>
                      </NavLink>
                    </ul>
                 
                </NavLink>

                
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <Navbar />
      </div>
    </div>
  );
};
export default Header;
