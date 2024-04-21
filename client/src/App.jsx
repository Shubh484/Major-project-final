import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/singup" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
