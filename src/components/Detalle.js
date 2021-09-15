import { useState, useEffect } from "react";
import { fs } from "../Config/Config";
import { useParams } from "react-router-dom";


const Detalle = () => {
  
  const [verProductos, setVerProductos] = useState([]);

  useEffect(() => {
    fs.collection("Products")
      .where("title", "==", "Televisor")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          console.log(doc.id);
          setVerProductos(
            querySnapshot.docs.map((documento) => {
              return { ...documento.data(), id: documento.id };
            })
          );
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    verProductos.length > 0 && (
      <div>
        {verProductos.map((verProducto) => (
          <div className="row lista">
            <div className="micard col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">{verProducto.title}</div>
                  <div className="card-img-top">
                    <img src={verProducto.url} alt="product-img" />
                  </div>

                  <h5 className="card-text">{verProducto.description}</h5>
                  <div className="card-text">{verProducto.price}</div>
                  <div className=" btn btn-danger btn-md cart-btn">
                    Agregar a Carro
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
   
  );
};

export default Detalle;
