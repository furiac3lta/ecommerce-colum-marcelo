import "animate.css";
import "./../styles/inicio.css";
import imagen4 from "../imagen/4.png";
import imagen5 from "../imagen/5.png";
import imagen6 from "../imagen/6.png";
const Inicio = () => {
  return (
    <>
      <div className="inicio">
        <div className="container">
          <div>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={imagen4} className="d-block w-30 h-30" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 className="animate__animated animate__fadeOut">
                      {" "}
                      Parlantes bluetooh
                    </h5>
                    <p className="animate__animated animate__fadeOut">
                      Variedad de modelos al mejor precio
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={imagen5} className="d-block w-30" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 className="animate__animated animate__fadeOut">
                      Auriculares Pro
                    </h5>
                    <p className="animate__animated animate__fadeOut">
                      La mejor caidad en articulos gamer
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={imagen6} className="d-block w-30 mouse" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 className="animate__animated animate__fadeOut">
                      Iphone en stock
                    </h5>
                    <p className="animate__animated animate__fadeOut">
                      Llegaron los iphone 12 a dolar oficial!
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
