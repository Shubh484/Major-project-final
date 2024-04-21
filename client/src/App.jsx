import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
