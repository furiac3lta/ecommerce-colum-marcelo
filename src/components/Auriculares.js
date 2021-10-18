import { useState, useEffect } from "react";
import { fs } from "../Config/Config";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./../styles/ListaProductos.css";
import Boton from "../styled/Boton";
import styled from "styled-components";

const Auriculares = () => {
  let { id } = useParams();
  const [verAuriculares, setVerAuriculares] = useState([]);

  useEffect(() => {
    fs.collection("Products")
      .where("category", "==", "auriculares")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          console.log(doc.id);
          setVerAuriculares(
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
    verAuriculares.length > 0 && (
      <div className="container" id="container-home">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center pt-5">Auriculares</h1>
            {verAuriculares.map((verAuricular) => (
              <div className="lista-prod">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">{verAuricular.title}</div>
                    <div className="card-img-top">
                      <img
                        id="img-lista-prod"
                        src={verAuricular.url}
                        alt="product-img"
                      />
                    </div>

                    <CardText>
                      {verAuricular.description}
                    </CardText>
                    <div className="card-text">$ {verAuricular.price}</div>
                    <Link to={`/detalle/${verAuricular.id}`}>
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
const CardText = styled.h5`
  margin-top: 100px;
`
export default Auriculares;
