import React from "react";
import IndividualProduct from './IndividualProduct'


const Products = ({products}) =>{

    console.log(products[0].url);

    return products.map((individualProduct) =>(
        <IndividualProduct key = {individualProduct.ID} individualProduct = { individualProduct }/>
    ) )

}
export default Products;