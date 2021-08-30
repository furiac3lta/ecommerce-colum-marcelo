import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "../styles/app.css";
import "../styles/NavBar.css";


function NavBar() {
  return (
<>
<div>
      <div className="row">
        <div className="col-lg-6">
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
              <NavLink className="navbar-brand" exact to ="/">
                Inicio
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
                      exact to ="/notebooks"
                    >
                      Notebooks
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to ="/celulares">
                      Celulares
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to ="/auriculares">
                      Auriculares
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div> 
</>

  );
}
export default NavBar;
