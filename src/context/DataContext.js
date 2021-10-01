import { createContext } from "react";
import { useState } from "react";
export const DataContext = createContext();


export const DataProvider = ({children}) => {


const [ carrito, setCarrito]  = useState([]);
const [count, setCount] = useState(1);
const vaciarCarrito = () =>{
    console.log(carrito)
    setCarrito([])
    setCount(0)
}

const icono =() =>{
    return carrito.reduce((acum, valor) => acum + valor.cantidad, 0)
}
    return ( 
        <DataContext.Provider value ={{
            carrito,
            count,
            setCarrito,
            setCount,
            vaciarCarrito
            
        }}>
            { children}
        </DataContext.Provider>
     );
}
 
export default DataContext;