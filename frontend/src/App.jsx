import React from 'react';   // ✅ ADD THIS LINE
import Header from "./components/Header";
import Banner from './components/Banner';

function App() {
  return (
    <>
      <Header />
      <Banner />

      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">
          Welcome to Book Shop 🚀
        </h1>
      </main>
    </>
  );
}

export default App;
