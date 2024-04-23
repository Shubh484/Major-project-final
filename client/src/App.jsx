import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import UserDetailPage from "./components/UserDetailPage/UserDetailPage";
import { DetailContextProvider } from "./context/DetailContext";

const App = () => {
  return (
    <>
      <DetailContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<SignUp />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/homepage" element={<HomePage />} />
            <Route exact path="/userdetail" element={<UserDetailPage />} />
          </Routes>
        </Router>
      </DetailContextProvider>
    </>
  );
};

export default App;
