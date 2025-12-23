import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Course from "./pages/Course";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>

      {/* Pages WITH Header & Footer */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
      />

      <Route
        path="/courses"
        element={
          <>
            <Header />
            <Course />
            <Footer />
          </>
        }
      />

      {/* Pages WITHOUT Header & Footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  );
}

export default App;
