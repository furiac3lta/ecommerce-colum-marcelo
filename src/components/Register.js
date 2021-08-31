import React, { Component } from "react";
import "../styles/Login.css";

export default class Register extends Component {
  render() {
    return (
      <div className="container container-form">
        <div class="login-box">
          <form class="email-signup">
            <div class="u-form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div class="u-form-group">
              <input type="password" placeholder="Password" />
            </div>
            <div class="u-form-group">
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div class="u-form-group">
              <button className="boton" >Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
