import React from "react";          // ✅ add (JSX safety)
import Header from "./components/Header";
import Banner from "./components/Banner";
import FreeBook from "./components/FreeBook";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <FreeBook />
      <Footer />
    </>
  );
}

export default App;
