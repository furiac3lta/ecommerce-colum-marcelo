import DataContext from "../context/DataContext";
import { useContext } from "react";
import "./../styles/Carrito.css";

const Carrito = () => {
  const { carrito, count } = useContext(DataContext);

  return (
    <>
      {carrito.map((producto) => {
        {
          console.log(producto.url);
        }
        return (
          <>
            <h1>Producto {producto.title}</h1>
            <h1>Precio ${producto.price}</h1>
            <div>
              <img src={producto.url} />
            </div>
          </>
        );
      })}
      <button className="btn btn-danger">Finalizar Compra</button>
    </>
  );
};

export default Carrito;
