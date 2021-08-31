import "bootstrap/dist/css/bootstrap.css";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
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
              <h3>Mara Shopping</h3>
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
              <ul className="menu">
                <NavLink exact to="/login"><li className ="menuli">Login</li></NavLink>
                <NavLink exact to="/"><li className ="menuli">Logout</li></NavLink>
                <NavLink exact to= "/register"><li className ="menuli">Register</li></NavLink>
              </ul>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
