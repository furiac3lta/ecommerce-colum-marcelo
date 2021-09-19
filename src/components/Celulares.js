import { useState, useEffect } from "react";
import { fs } from "../Config/Config";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./../styles/ListaProductos.css";

const Notebooks = () => {
  let { id } = useParams();
  const [verNotebooks, setVerNotebooks] = useState([]);
  const [verProductos, setVerProductos] = useState([]);

  useEffect(() => {
    fs.collection("Products")
      .doc(id)
      .get()
      .then((docu) => setVerNotebooks({ id: docu.id, ...docu.data() }))

      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    fs.collection("Products")
      .where("category", "==", "celulares")
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
      <div className="container" id="container-home">
        <div className="row">
          <div className="col-lg-12">
            {verProductos.map((verProducto) => (
              <div className="lista-prod">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">{verProducto.title}</div>
                    <div className="card-img-top">
                      <img  id="img-lista-prod" src={verProducto.url} alt="product-img" />
                    </div>

                    <h5 className="card-text">{verProducto.description}</h5>
                    <div className="card-text">{verProducto.price}</div>
                    <Link to={`/detalle/${verNotebooks.ID}`}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Notebooks;
