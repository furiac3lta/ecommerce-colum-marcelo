import React, { useState, useEffect } from "react";
import { auth, fs } from "../Config/Config";
import Products from "./Products";
import '../styles/Home.css'



const Home = () => {
  //fs =  firebase.firestore()
  function GetCurrentUser(){
    const [user, setUser] = useState();
    useEffect(()=>{
      auth.onAuthStateChanged(user =>{
         if(user){
            fs.collection('users').doc(user.uid).get().then(snapshot =>{
            setUser(snapshot.data().Fullname);
          })
        }
        else{
          setUser(null);
        } 
      })
    },[])
    return user;
  }
  const user = GetCurrentUser();
  //console.log(user)


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

 
  const addToCart =(product) =>{
     console.log(product);

  }

  return (
    <>
    
      <h1 className="text-center pt-5">Productos</h1>
      <div className="container">
        <div className="cards">
          {products.length > 0 && (
            <div>
              <div>
                <Products products={products} addToCart = { addToCart }/>
                {console.log(products)}
              </div>
            </div>
          )}
          {products.length < 1 && (
            <div className="container-fluid"> Please wait...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
