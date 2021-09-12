import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Header.css";
import { NavLink, useHistory } from "react-router-dom";
import Home from "./Home";
import {Icon} from 'react-icons-kit';
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart';
import {auth} from '../Config/Config';


const Header = ({user}) => {
    
  const history = useHistory();
  const handleLogout=()=>{
    auth.signOut().then(()=>{
      history.push('/login')
    })
  
  }
    
    const toggleMenu = () => {
    let ancla = document.querySelector(".menu");
    ancla.classList.toggle("active");
    
  };
  
  return (
    <div>
      <div>
        <div className="header">
          <div className="row">
            <div className="col-lg-9 col-6 rowdiv">
             
              <h3>Mara Shopping {user}</h3>
            </div>
            <div className="col-lg-3 col-6 coldiv">
              <NavLink exact to="/search">
                <i class="fas fa-search"></i>
              </NavLink>
              <NavLink exact to="/carrito">
                <i class="fas fa-shopping-cart"></i>
              </NavLink>
              <NavLink exact to="#">
                <i
                  onMouseOver={toggleMenu}
                  
                  class="far fa-user"
                  style={{
                    paddingTop: "10px",
                  }}
                ></i>
              </NavLink>
              {!user && (
                <>
                  <ul className="menu">
                    <NavLink exact to="/login">
                      <li className="menuli">Login</li>
                    </NavLink>

                    <NavLink exact to="/register">
                      <li className="menuli">Register</li>
                    </NavLink>
                  </ul>
                </>
              )}
              {user && (
                <>
                  <div>
                    <NavLink className="navlink" to="/">
                      {user}
                    </NavLink>
                  </div>
                  <div className="cart-menu-btn">
                    <NavLink className="navlink" to="/cart">
                      <Icon icon={shoppingCart} size={20} />
                    </NavLink>
                   {/*  <span className="cart-indicator">{totalQty}</span> */}
                  </div>
                  <NavLink exact to="/">
                    <li onClick={handleLogout} className="menuli">Logout</li>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
