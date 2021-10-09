import DataContext from "../context/DataContext";
import { useContext,useEffect, useState } from "react";
import "./../styles/Carrito.css";
import { NavLink } from "react-router-dom";
import { storage, fs } from "../Config/Config";
import firebase from 'firebase';
import 'firebase/firestore'
import { auth } from "../Config/Config";


const Carrito = () => {
  const { carrito, count, vaciarCarrito } = useContext(DataContext);

  const user = auth.currentUser;
   const email = user.email;
   console.log(typeof(email))
  
  function GetCurrentUser() {
    const [users, setUsers] = useState();
    
    useEffect(() => {
      auth.onAuthStateChanged((user, email) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUsers(snapshot.data().Fullname);
              
            });
        } else {
          setUsers(null);
        }
      });
    }, []);
    return users;
  }
  const users = GetCurrentUser();
console.log(users)
  
  

  const items = (item, index) => {
    return (
      <>
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item.producto.title}</td>
        <td>{item.countVendido}</td>
        <td> $ {item.producto.price}</td>
        <td> $ {item.producto.price * item.countVendido} </td> 
      </tr>
      </>
    );
  };

  const precioTotal = carrito.reduce((acc, item) => { 
    return acc + (item.countVendido * item.producto.price)
  },0)
  
  const handleSubmit = (e) =>{

    let orden ={}
    orden.date = firebase.firestore.Timestamp.fromDate( new Date ());
    orden.buyer = {
      name:users,
      email:email}
    //orden.buyer = FormData
    orden.total = precioTotal;
    orden.items = carrito.map(item =>{
      const id = item.producto.id;
      const title = item.producto.title;
      const price = item.producto.price * item.countVendido;
      return { id, title, price }
    })
 
fs.collection('orders').add(orden).then(resp =>console.log(resp))  
console.log(orden.id)
  }

  return (
    <>
      {count === 0 ? (
        <>
          {console.log("carrito vacio")}
          <div>
            <h1>No hay productos en su carrito</h1>
            <NavLink exact to="/home" className="btn btn-danger">
              Ir a Productos
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Indice</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map(items)}
                <tr>
                  <th scope="row">Total</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><strong>$ {precioTotal}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      <div className="container">
        <button className="btn btn-danger" onClick={() => vaciarCarrito()}>
          Vaciar Carrito
        </button>
        <button className="btn btn-danger" onClick={handleSubmit}>
           Realizar Compra
        </button>
      </div>
      <p></p>
    </>
  );
};
export default Carrito;
