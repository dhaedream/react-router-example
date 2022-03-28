import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import "./home.css";
import Pricing from "../pricing/Pricing";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
    </div>
  );
};

export default Home;
