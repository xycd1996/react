import React, { Component } from 'react'
import './login.sass'

export class Login extends Component {
  render() {
    return (
      <div id="login">
        <div className="login-container">
          <div className="username">123</div>
          <div className="password"></div>
          <div className="validateBar"></div>
          <div className="handler"></div>
        </div>
      </div>
    )
  }
}

export default Login
