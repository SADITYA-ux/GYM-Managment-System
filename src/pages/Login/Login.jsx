import React from "react";
import Login from "../../components/auth/Login/Login";
import "./Login.css";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-left">
          <h1>Welcome Back</h1>
          <p>Please login to continue</p>
        </div>

        <div className="login-right">
          <Login />
        </div>

      </div>
    </div>
  );
}
