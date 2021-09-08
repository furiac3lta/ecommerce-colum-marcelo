import "../styles/individualProduct.css";

const IndividualProduct = ({ individualProduct }) => {
  console.log(individualProduct);
  return (
    <div className="row row-cols-2 g-2">
      <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-title">{individualProduct.title}</div>
          <div className="product-img">
            <img src={individualProduct.url} alt="product-img"/>
          </div>

          <h5 className="card-text">{individualProduct.description}</h5>
          <div className="card-text">{individualProduct.price}</div>
          <div className=" btn btn-danger btn-md cart-btn">Agregar a Carro</div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default IndividualProduct;
