import "bootstrap/dist/css/bootstrap.css";
import "../styles/app.css";
import "../styles/NavBar.css"
function NavBar() {
  return (
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
              <a className="navbar-brand" href="#">
                Ventas
              </a>
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
              <div className="collapse navbar-collapse" id="navbarNav" style={{
                 fontFamily: "'Lato', sans-serif",
              }}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Categorias
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Precios
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </nav>
        </div>
  
  
      </div>
      
    </div>
  );
}
export default NavBar;
