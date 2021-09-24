import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../styles/ContadorProducto.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";


const ContadorProducto = ({ producto, onAdd }) => {
const { carrito, setCarrito } = useContext(DataContext)

  const [count, setCount] = useState(1);
  const [cambiarBoton, setCambiarBoton] = useState(true);

  function sumar() {
    if (count < producto.stock) {
      setCount(count + 1); // count ++ => count = count +1
      console.log(count);
    }
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
      console.log(count);
    }
  }

  const agregarCarrito = () => {
     
  console.log("la cantidad a comprar es: " + count)
  let copyCarrito = [...carrito, producto] 
  setCarrito (copyCarrito)
  console.log(carrito)
 
  };

  

  return (
    <div>
      {cambiarBoton ? (
        <>
          <NavLink exact to="/home">
            <i class="volver fas fa-undo"></i>
          </NavLink>
          <NavLink exact to="/home/carrito">
            <button className="buy--btn" onClick={agregarCarrito}>
              AGREGAR A CARRO
            </button>
          </NavLink>
          <button id="idmas" className="btn btn-danger" onClick={sumar}>
            +
          </button>
          <label>{count}</label>
          <button id="idmas" className="btn btn-danger" onClick={restar}>-</button>
          <br />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ContadorProducto;
