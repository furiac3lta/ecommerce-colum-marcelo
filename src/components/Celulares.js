import { useState, useEffect } from "react";
import { fs } from "../Config/Config";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./../styles/ListaProductos.css";
import Boton from "../styled/Boton";
const Celulares = () => {
  let { id } = useParams();
  const [verCelulares, setVerCelulares] = useState([]);

  useEffect(() => {
    fs.collection("Products")
      .where("category", "==", "celulares")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.data();

          setVerCelulares(
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
    verCelulares.length > 0 && (
      <div className="container" id="container-home">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center pt-5">Celulares</h1>
            {verCelulares.map((verCelular) => (
              <div className="lista-prod">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">{verCelular.title}</div>
                    <div className="card-img-top">
                      <img
                        id="img-lista-prod"
                        src={verCelular.url}
                        alt="product-img"
                      />
                    </div>

                    <h5 id="detalle-card-text" className="card-text">
                      {verCelular.description}
                    </h5>
                    <div className="card-text">$ {verCelular.price}</div>
                    <Link to={`/detalle/${verCelular.id}`}>
                      <Boton>Detalle</Boton>
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

export default Celulares;
