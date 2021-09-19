import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fs } from "../Config/Config";
import "./../styles/ListaProductos.css"

const Detalle = () => {
  let { id } = useParams();
  const [verProducto, setVerProducto] = useState([]);
  useEffect(() => {
    fs.collection("Products")
      .doc(id)
      .get()
      .then((docu) => setVerProducto({ id: docu.id, ...docu.data() }))
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div>
      {console.log(verProducto)}
      <div className="row lista">
        <div className="micard col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="card-title">{verProducto.title}</div>
              <div className="card-img-top">
                <img id="img-lista-prod"  src={verProducto.url} alt="product-img" />
              </div>

              <h5 className="card-text">{verProducto.description}</h5>
              <div className="card-text">{verProducto.price}</div>
              <div className=" btn btn-danger btn-md cart-btn">
                Agregar Carro
              </div>
              <div className=" btn btn-danger btn-md cart-btn">
                Comprar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Detalle;
