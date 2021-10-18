import { useState, useEffect } from "react";
import { fs } from "../Config/Config";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./../styles/ListaProductos.css";
import Boton from "../styled/Boton";
import styled from "styled-components";
const Notebooks = () => {
  let { id } = useParams();
  const [verNotebooks, setVerNotebooks] = useState([]);

  useEffect(() => {
    fs.collection("Products")
      .where("category", "==", "notebooks")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.data();
          //console.log(doc.id, " => ", doc.data());
          //console.log(doc.id);
          setVerNotebooks(
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
    verNotebooks.length > 0 && (
      <div className="container" id="container-home">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center pt-5">Notebooks</h1>
            {verNotebooks.map((vernotebook) => (
              <div className="lista-prod">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">{vernotebook.title}</div>
                    <div className="card-img-top">
                      <img
                        id="img-lista-prod"
                        src={vernotebook.url}
                        alt="product-img"
                      />
                    </div>

                    <CardText>{vernotebook.description}</CardText>
                    <div className="card-text">$ {vernotebook.price}</div>
                    <Link to={`/detalle/${vernotebook.id}`}>
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
  margin-top: 70px;
`
export default Notebooks;
