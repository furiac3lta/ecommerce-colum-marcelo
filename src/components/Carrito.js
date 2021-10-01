import DataContext from "../context/DataContext";
import { useContext } from "react";
import "./../styles/Carrito.css";
import { NavLink } from "react-router-dom";

const Carrito = () => {
  const { carrito, count, vaciarCarrito } = useContext(DataContext);
  console.log(count + 1);
  return (
    <>
      {count === 0 ? (
        <>
          {console.log("carrito vacio")}

          <div>
            <h1>No hay productos en su carrito</h1>
            <NavLink exact to="/home">
              Ir a Productos
            </NavLink>
          </div>
        </>
      ) : (
        carrito.map((producto) => {
          return (
            <>
              <h1>Producto {producto.title}</h1>
              <h1>Precio ${producto.price}</h1>
              <h1>Cantidad {count}</h1>
              <h2>Total $ {count * producto.price}</h2>
              <div>
                <img src={producto.url} />
              </div>
              <button className="btn btn-danger">Finalizar Compra</button>
            </>
          );
        })
      )}

      <button className="btn btn-danger" onClick={() => vaciarCarrito()}>
        Vaciar Carrito
      </button>
    </>
  );
};

export default Carrito;
