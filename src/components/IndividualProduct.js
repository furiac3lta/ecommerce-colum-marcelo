import { NavLink } from "react-router-dom";
import "../styles/individualProduct.css";

const IndividualProduct = ({ individualProduct, addToCart }) => {
  console.log(individualProduct);
  const handleAddToCart = () => {
    addToCart(individualProduct);
  };
  return (
    <div className="row lista">
      <div className="micard col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="card-title">{individualProduct.title}</div>
            <div className="card-img-top">
              <img src={individualProduct.url} alt="product-img" />
            </div>

            <h5 className="card-text">{individualProduct.description}</h5>
            <div className="card-text">{individualProduct.price}</div>
            <NavLink exact to ="/detalle"> 
              <div
                className="btn btn-danger btn-md cart-btn"
                style={{
                  marginLeft: "1px",
                }}
              >
                Detalle
              </div>
            </NavLink>
            <div className=" btn btn-danger btn-md cart-btn">
              Agregar a Carro
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default IndividualProduct;
