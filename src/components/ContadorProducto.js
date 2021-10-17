import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../styles/ContadorProducto.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import Boton from "../styled/Boton";

const ContadorProducto = ({ producto }) => {
  const { agregarCarrito } =
    useContext(DataContext);

  const [cambiarBoton, setCambiarBoton] = useState(true);
  const [count, setCount] = useState(1)
  function sumar() {
    if (count < producto.stock) {
      setCount(count + 1);
      console.log(count);
    }
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
      console.log(count);
    }
  }
  function agregarC(){
    agregarCarrito(producto, count)
}
  

  return (
    <div>
      {cambiarBoton ? (
        <>
          <NavLink exact to="/home">
            <i class="volver fas fa-undo"></i>
          </NavLink>
          <NavLink exact to="/home/carrito">
            <Boton onClick={agregarC}>
            AGREGAR A CARRO
            </Boton>
            
          </NavLink>
          <Boton id="idmas" onClick={sumar} >
            +
          </Boton>
          <label>{count}</label>
          <Boton id="idmas" onClick={restar}>
            -
          </Boton>
          <br />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ContadorProducto;
