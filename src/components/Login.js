import React, { Component } from "react";
import "../styles/Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="container container-form">
        <div class="login-box">
          <form class="email-login">
            <div class="u-form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div class="u-form-group">
              <input type="password" placeholder="Password" />
            </div>
            <div class="u-form-group">
              <button className="boton">Log in</button>
            </div>
            <div class="u-form-group">
              <a href="#" class="forgot-password">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
