import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Pricing from "./routes/Pricing";
import Faq from "./routes/Faq";
import ContactRoute from "./routes/ContactRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes>
    </>
  );
}

export default App;
