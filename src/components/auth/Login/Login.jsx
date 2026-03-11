import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const emailA = "admin@gmail.com";
  const passwordA = "admin123";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.email === emailA && data.password === passwordA) {
      setMessage("✅ Login Successful!");
    } else if (data.email === emailA && data.password !== passwordA) {
      setMessage("❌ Incorrect Password");
    } else if (data.email !== emailA && data.password === passwordA) {
      setMessage("❌ Incorrect Email");
    } else {
      setMessage("❌ Wrong email and password");
    }
  };

  return (
    <div className="Login-main">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <div className="email-sec">
          <input
            placeholder="Email Here"
            required
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <label>Password</label>
        <div className="password-sec">
          <input
            placeholder="Password Here"
            required
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>

        {message && <p className={`login-message ${message.includes("✅") ? "success" : "error"}`}>{message}</p>}
      </form>
    </div>
  );
}
