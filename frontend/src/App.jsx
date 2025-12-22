import React from 'react';   // ✅ ADD THIS LINE
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">
          Welcome to Book Shop 🚀
        </h1>
      </main>
    </>
  );
}

export default App;
