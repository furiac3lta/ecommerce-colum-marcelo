import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fs } from "../Config/Config";
import "./../styles/Detalle.css";
import "./../styles/ContadorProducto.css";
import ContadorProducto from "./ContadorProducto";


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
    <div id="container-detalle" className="container">
      {console.log(verProducto)}
      <section className="product">
        <div className="product__photo">
          <div className="">
            <div className="">
              <div className="controls"></div>
              <img
                id="img-detalle"
                src={verProducto.url}
                alt="green apple slice"
              />
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="title">
            <h1>{verProducto.title}</h1>
            <span>{verProducto.price}</span>
          </div>
          <div className="price">
            $ <span>{verProducto.price}</span>
          </div>

          <div className="description">
            <h3>DETALLE</h3>
            <ul>
              <li>{verProducto.detalle}</li>
              <li>STOCK {verProducto.stock}</li>
            </ul>
          </div>
          
            <ContadorProducto producto = {verProducto} />
        
        </div>
      </section>
    </div>
  );
};

export default Detalle;
