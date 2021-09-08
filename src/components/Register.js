import React, { useState } from "react";
import "../styles/Login.css";
import { auth, fs } from "../Config/Config";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Register = () => {
  const history = useHistory();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        console.log(credentials);
        fs.collection("users")
          .doc(credentials.user.uid)
          .set({
            Fullname: fullname,
            Email: email,
            Password: password,
          })
          .then(() => {
            setSuccessMsg(
              "Registro exitoso, redirijiendon a la ventana de login"
            );
            setFullname("");
            setEmail("");
            setPassword("");
            setErrorMsg("");
            setTimeout(() => {
              history.push("/login");
            }, 3000);
          })
          .catch((error) => setErrorMsg(error.message));
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  return (
    <div className="container container-form">
      <div class="login-box">
        <form class="email-signup" onSubmit={handleSignup}>
          <div class="u-form-group">
            <input
              type="text"
              placeholder="Ingrese su nombre"
              required
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
            />
          </div>
          <div class="u-form-group">
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div class="u-form-group">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div class="u-form-group">
            <button className="boton">Sign Up</button>
          </div>
        </form>
       
      </div>
      {successMsg && (
          <>
            <div className="container col-lg-4 bg-warning">{successMsg}</div>{" "}
          </>
        )}
        {errorMsg && (
          <>
            <div className="container col-lg-4 bg-warning">{errorMsg}</div>{" "}
          </>
        )}
    </div>
  );
};

export default Register;
