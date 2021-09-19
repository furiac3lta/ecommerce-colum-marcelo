import { Link } from "react-router-dom";
import "./../styles/ListaProductos.css";
import "animate.css";
const IndividualProduct = ({ individualProduct, addToCart }) => {
  console.log(individualProduct);
  const handleAddToCart = () => {
    addToCart(individualProduct);
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-img-top">
          <img
           id="img-lista-prod"
            className="mx-auto d-block"
            src={individualProduct.url}
            alt="product-img"
          />
        </div>
        <div className="card-title">{individualProduct.title}</div>
        <h4 className="card-text">{individualProduct.description}</h4>
        <div className="card-text">$ {individualProduct.price}</div>
        <Link to={`/detalle/${individualProduct.ID}`}>
          <div
            className="mibutton btn btn-danger btn-md cart-btn"
            style={{
              marginLeft: "1px",
            }}
          >
            Detalle
          </div>
        </Link>
      </div>
    </div>
  );
};
//9BnHx90etciK2iUtcIy9

export default IndividualProduct;
