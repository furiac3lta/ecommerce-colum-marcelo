import { createContext } from "react";
import { useState } from "react";
export const DataContext = createContext();


export const DataProvider = ({children}) => {
    
const [ carrito, setCarrito]  = useState([]);
const [count, setCount] = useState();


    return ( 
        <DataContext.Provider value ={{
            carrito,
            setCarrito,
            count,
            setCount
        }}>
            { children}
        </DataContext.Provider>
     );
}
 
export default DataContext;