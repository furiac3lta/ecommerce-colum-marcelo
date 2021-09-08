import React, { useState } from "react";
import "../styles/Login.css";
import { auth } from "../Config/Config";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin =(e)=>{
    e.preventDefault();
    //console.log(email, password);
    auth.signInWithEmailAndPassword(email, password).then(()=>{
      setSuccessMsg("Login successful")
      setEmail("");
            setPassword("");
            setErrorMsg("");
            setTimeout(() => {
              history.push("/home");
            }, 3000);
    }).catch(error=> setErrorMsg(error.message));
  }
  return (
    <div className="container container-form">
      <div className="login-box">
        <form className="email-login" autoComplete="off" onSubmit={handleLogin}>
          <div className="u-form-group">
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="u-form-group">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="u-form-group">
            <button className="boton">Log in</button>
          </div>
          <div className="u-form-group">
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
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
export default Login;
