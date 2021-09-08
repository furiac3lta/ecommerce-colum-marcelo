import React, { useState } from "react";
import { storage, fs } from "../Config/Config";
const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [uploadError, setUploadError] = useState("");
  const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];
  const handleProductImg = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setImage(selectedFile);
        setImageError("");
      } else {
        setImage(null);
        setImageError("formatos admitidos jpg jpeg png");
      }
    } else {
      console.log("Favor elegir la imagen");
    }
  };

  const handleAddProducts = (e) => {
    e.preventDefault();
    console.log(title, description, price);
    console.log(image);
    const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      error => setUploadError(error.message),
      () => {
        storage
          .ref("product-images")
          .child(image.name)
          .getDownloadURL()
          .then((url => {
            fs.collection("Products")
              .add({
                title,
                description,
                price: Number(price),
                url,
              })
              .then(() => {
                setSuccessMsg("Producto Agregado");
                setTitle("");
                setDescription("");
                setPrice("");
                document.getElementById("file").value = "";
                setImageError("");
                setUploadError("");
                setTimeout(() => {
                  setSuccessMsg("");
                }, 3000)
              })
              .catch((error) => setUploadError(error.message));
          }))
      })
  }

  return (
    <div className="container">
      <h1>Agregar Productos</h1>
      {successMsg && (
        <>
          <br></br>
          <div className="p-3 mb-5 bg-success text-white">{successMsg}</div>
        </>
      )}
      <form
        autoComplete="off"
        className="form-group"
        onSubmit={handleAddProducts}
      >
        <label>Nombre del Producto</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
        <br></br>
        <label>Descripcion</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></input>
        <br></br>
        <label>Precio</label>
        <input
          type="number"
          className="form-control"
          required
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        ></input>
        <br></br>
        <label>Subir imagen del producto</label>
        <input
          type="file"
          id="file"
          className="form-control"
          required
          onChange={handleProductImg}
        ></input>
        <br></br>
        {imageError && (
          <>
            <br></br>
            <div className="p-3 mb-5 bg-danger">{imageError}</div>
          </>
        )}
        <br></br>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="submit" className="btn btn-success btn-md">
            Agregar
          </button>
        </div>
      </form>
      {uploadError && (
        <>
          <br></br>
          <div className="p-3 mb-5 bg-danger ">{uploadError}</div>
        </>
      )}
    </div>
  );
};
export default AddProducts;