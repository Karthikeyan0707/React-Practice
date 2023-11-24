import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <div className="App">
      <Navbar setToken={setToken} />
      {token ? <Product /> : <Login token={token} setToken={setToken} />}
      <Footer />
    </div>
  );
}

export default App;
