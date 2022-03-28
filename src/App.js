import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Pricing from "./routes/Pricing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
