import { Link } from "react-router-dom";
import "./../styles/ListaProductos.css";
import "animate.css";
import Boton from "../styled/Boton";
import styled from "styled-components";
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
        {/* <div className="card-title">{individualProduct.title}</div> */}
        <CardText>{individualProduct.description}</CardText>
        <div className="card-text">$ {individualProduct.price}</div>
        <Link to={`/detalle/${individualProduct.ID}`}>
          <Boton>Detalle</Boton>
        </Link>
      </div>
    </div>
  );
};
//9BnHx90etciK2iUtcIy9
const CardText = styled.h5`
  margin-top: 100px;
`
export default IndividualProduct;
