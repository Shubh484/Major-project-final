import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

// icons
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // Login successful, handle accordingly (e.g., redirect to dashboard)
        console.log("Account Created");
        navigate("/homepage");
      } else {
        const data = await response.json();
        // Set error message based on API response
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <>
      <div className="login-form-wrapper">
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="email">
              <span className="signupicon">
                <FaUserAlt />
              </span>
              <input
                className="input-field"
                type="text"
                id="email"
                value={email}
                placeholder="Enter E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <span className="signupicon">
                <FaLock />
              </span>
              <input
                className="input-field"
                type="password"
                id="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button">
              <button className="btn-content" type="submit">
                Login
              </button>
            </div>
            {errorMessage && (
              <div className="error-message">{alert(errorMessage)}</div>
            )}
          </form>
          <a href="/signup">Create Account</a>
        </div>
      </div>
    </>
  );
};

export default Login;
