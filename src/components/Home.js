import React, { useState, useEffect } from "react";
import { auth, fs } from "../Config/Config";
import Products from "./Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const products = await fs.collection("Products").get();
    const productsArray = [];
    for (var snap of products.docs) {
      var data = snap.data();
      data.ID = snap.id;
      productsArray.push({
        ...data,
      });
      if (productsArray.length === products.docs.length) {
        setProducts(productsArray);
      }
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.length > 0 && (
        <div>
          <h1 className="text-center">Productos</h1>
          <div className="row">
            <div className="col-lg-4">
              <div className="container d-flex">
                <div className="container ">
                  <Products products={products} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {products.length < 1 && (
        <div className="container-fluid"> Please wait...</div>
      )}
    </>
  );
};

export default Home;
