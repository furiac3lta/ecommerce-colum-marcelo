import { createContext, useContext } from "react";
import { useState } from "react";
export const DataContext = createContext();
export const DataProvider = ({children}) => {
const [ carrito, setCarrito]  = useState([]);
//const [count, setCount] = useState(0);
const vaciarCarrito = () =>{
    console.log(carrito)
    setCarrito([])
}




const agregarCarrito = (producto,cantidad) => {
    const copyCarrito = [...carrito]
    let index = copyCarrito.findIndex((elemento)=> elemento.producto.id === producto.id  )
    if(index !== -1){
        let nuevoCount = cantidad + carrito[index].countVendido
        copyCarrito[index].countVendido = nuevoCount
    }else{
        let item = {producto:producto, countVendido:cantidad}
        copyCarrito.push(item)
    }
    setCarrito(copyCarrito);
  };
    return ( 
        <DataContext.Provider value ={{
            carrito,
            agregarCarrito,
            setCarrito,
            vaciarCarrito,
            
        }}>
            { children}
        </DataContext.Provider>
     );
}
export default DataContext;