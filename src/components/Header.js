import "bootstrap/dist/css/bootstrap.css";
import "../styles/Header.css";

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
              <a href="#">
                
                <i class="fas fa-search"></i>
              </a>
              <a href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>
              <a href="#">
                <i
                  onClick={toggleMenu}
                  class="far fa-user"
                  style={{
                    paddingTop: "10px",
                  }}
                ></i>
              </a>
              <ul className="menu">
                <li>Login</li>
                <li>Logout</li>
                <li>Register</li>
              </ul>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
